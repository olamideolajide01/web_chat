import React from "react";

export default function Message() {
  return (
    <section className="overflow-y-auto  px-4 overflow-auto py-3 ">
      <section className="flex gap-4">
        <div>
          <img
            src="/ola.jpg"
            height={50}
            width={50}
            alt=""
            className="rounded-full"
          />
          <span className="text-xs ">Just Now</span>
        </div>

        <div className="flex max-w-[80%] flex-col gap-2">
          <p className="bg-gray-400 text-sm px-3 py-2 rounded-r-lg rounded-bl-lg">
            Hello there!
          </p>
          <img
            src="/ola.jpg"
            width={100}
            height={50}
            alt=""
            className="rounded"
          />
        </div>
      </section>
    </section>
  );
}
