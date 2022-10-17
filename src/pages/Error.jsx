import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex justify-center items-center h-screen  bg-white ">
      <div>
        <p className="font-bold text-lg">Oops!!</p>
        <p className="text-[70px] font-black text-indigo-400"> Error 404 </p>
        <p>
          Try going back{" "}
          <Link to={`/`}>
            {" "}
            <button className="border border-primary px-4 py-2 rounded">
              HOME
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
