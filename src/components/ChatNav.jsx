import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export default function ChatNav() {
  const { data } = useContext(ChatContext);
  return (
    <div className="flex  justify-between px-2 py-2 h-[40px] bg-slate-700 ">
      <span>
        <img src="/menu.svg" alt="" className="sm:hidden" />
      </span>
      <span className="text-white font-thin">{data.user?.displayName}</span>
      <div className="flex gap-2">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
}
