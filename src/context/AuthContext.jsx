import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [curUser, setCurUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurUser(user);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ curUser }}>{children}</AuthContext.Provider>
  );
}
