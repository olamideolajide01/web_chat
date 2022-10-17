import React, { useState, useEffect, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function Chats() {
  const { curUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", curUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    curUser.uid && getChats();
  }, [curUser.uid]);

  const handleSelects = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  console.log(Object.entries(chats));

  return (
    <div>
      {Object.entries(chats)?.map((chat) => (
        <div
          onClick={() => handleSelects(chat[1].userInfo)}
          key={chat[0]}
          className="pl-2 py-2 flex space-x-2 items-center cursor-pointer hover:bg-slate-400"
        >
          <img
            src={chat[1].userInfo.photoURL}
            alt=""
            className="h-6 w-6 rounded-full "
          />
          <div>
            <h1 className="text-white">{chat[1].userInfo.displayName}</h1>
            <p className="text-[#ccc] text-xs font-light">
              {chat[1].userInfo.lastMessage?.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
