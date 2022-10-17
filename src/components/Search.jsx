import React, { useState } from "react";
import { collection, query, where, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { curUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async (e) => {
    const combinedId =
      curUser.uid > user.uid ? curUser.uid + user.uid : user.uid + curUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      //create a chat in the chat collection
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // create user chats
        await updateDoc(doc(db, "userChats", curUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: curUser.uid,
            displayName: curUser.displayName,
            photoURL: curUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
    setUser(null);
    setUsername("");
  };

  return (
    <div className="border-b-[#999] py-2 border-b">
      <label htmlFor="search"></label>
      <input
        type="search"
        name="search"
        id="search"
        onKeyDown={handleKey}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Find a user"
        className="bg-transparent text-[#999] pl-2 w-full  py-2 focus:outline-none "
      />
      {err && <p>User not found</p>}
      {user && (
        <div
          onClick={handleSelect}
          className="pl-2 py-2 flex space-x-2 items-center cursor-pointer hover:bg-slate-400"
        >
          <img src={user.photoURL} alt="" className="h-6 w-6 rounded-full" />
          <p className="text-white">{user.displayName}</p>
        </div>
      )}
    </div>
  );
}
