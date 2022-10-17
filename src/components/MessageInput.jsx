import React from "react";

export default function MessageInput() {
  return (
    <section>
      <div className=" flex">
        <label htmlFor="message"></label>
        <input
          type="text"
          name="text"
          id="message"
          placeholder="Type your Message"
          className="bg-[#dddddd] w-[75%] text-[#333] pl-2 py-3  focus:outline-none "
        />
        <div className="flex   bg-[#dddddd] gap-2 px-2 items-center">
          <img src="/attach.svg" alt="attached" />
          <input hidden type="file" name="file" id="file" />
          <label htmlFor="file">
            <img src="" alt="pix" />
          </label>
          <button className="px-2 rounded border border-[#cccccc] hover:bg-slate-400  ">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
