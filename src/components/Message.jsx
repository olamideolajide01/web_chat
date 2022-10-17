import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function Message({ message }) {
  const { curUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behaviour: "smooth" });
  }, [message]);
  return (
    <section className="overflow-y-auto  px-4 overflow-auto py-3 ">
      <section
        ref={ref}
        className={` ${
          message.senderId === curUser.uid
            ? "flex gap-4"
            : "flex gap-4 flex-row-reverse"
        }`}
      >
        <div>
          <img
            src={
              message.senderId === curUser.uid
                ? curUser.photoURL
                : data.user.photoURL
            }
            height={50}
            width={50}
            alt=""
            className="rounded-full"
          />
          <span className="text-xs ">Just Now</span>
        </div>

        <div className="flex max-w-[80%] flex-col gap-2">
          <p
            className={`${
              message.senderId === curUser.uid
                ? "bg-gray-400 text-sm px-3 py-2  rounded-r-lg rounded-bl-lg"
                : "bg-blue-200 text-sm px-3 py-2  rounded-l-lg rounded-br-lg"
            }`}
          >
            {message.text}
          </p>
          {message.img && (
            <img
              src={message.img}
              width={100}
              height={50}
              alt=""
              className="rounded"
            />
          )}
        </div>
      </section>
    </section>
  );
}
