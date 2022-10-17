import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function MessageInput() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { curUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          //  setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: curUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: curUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", curUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <section>
      <div className=" flex">
        <label htmlFor="message"></label>
        <input
          type="text"
          name="text"
          id="message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your Message..."
          className="bg-[#dddddd] w-[75%] text-[#333] pl-2 py-3  focus:outline-none "
        />
        <div className="flex   bg-[#dddddd] gap-2 px-2 items-center">
          <img src="/attach.svg" alt="attached" />
          <input
            hidden
            type="file"
            name="file"
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file">
            <img src="" alt="pix" />
          </label>
          <button
            onClick={handleSend}
            className="px-2 rounded border border-[#cccccc] hover:bg-slate-400  "
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
