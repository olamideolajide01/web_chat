import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

export default function Dashboard() {
  return (
    <>
      <section className=" flex items-center max-w-screen justify-center h-screen px-4 sm:px-6 lg:px-12 ">
        <div className=" h-[500px] sm:w-[80%] rounded-lg flex bg-white">
          <div className="w-full  sm:flex-1 bg-slate-900">
            <Sidebar />
          </div>

          <div className="w-full flex-3 ">
            <Chat />
          </div>
        </div>
      </section>
    </>
  );
}
