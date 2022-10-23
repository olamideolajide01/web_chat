import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import LoadingSpinner from "../partials/LoadingSpinner";

export default function NavAppbar() {
  const { curUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="flex p-2 pr-8 bg-slate-600 items-center gap-9 justify-between">
        <div className="text-white font-bold">YofoChat</div>
        <div className="flex items-center  space-x-3">
          <img src={curUser.photoURL} className="h-6 w-6 rounded-full" alt="" />

          <p className="text-white text-xs ">{curUser.displayName}</p>
          <button
            onClick={() => signOut(auth)}
            className=" rounded text-white bg-slate-500 text-xs px-2 py-1"
          >
            {loading ? <LoadingSpinner /> : <span> Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
