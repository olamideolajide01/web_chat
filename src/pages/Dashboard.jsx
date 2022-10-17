import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

export default function Dashboard() {
  return (
    <>
      <section className=" flex items-center w-[60%] mx-auto h-screen px-4 sm:px-6 lg:px-12 ">
        <div className=" h-[500px] rounded-lg flex bg-white">
          <div className="w-full flex-1 bg-slate-900">
            <Sidebar />
          </div>

          <div className="w-full flex-2 overflow-auto">
            <Chat />
          </div>
        </div>
      </section>
    </>
  );
}
