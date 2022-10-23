import React, { useContext, useState, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import MessageInput from "./MessageInput";
import ChatNav from "./ChatNav";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);
  return (
    <div className="h-full flex flex-col justify-between">
      <ChatNav />
      {messages.length ? (
        <div className="max-h-full overflow-auto h-[82%]">
          <div>
            {messages?.map((m) => (
              <Message message={m} key={m.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center text-xl text-[#333]">
          Choose a chat to start a conversation..
        </div>
      )}

      <div className="rounded-b ">
        <MessageInput />
      </div>
    </div>
  );
}
