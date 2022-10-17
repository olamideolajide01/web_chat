import React, { useReducer } from "react";
import { useContext, createContext } from "react";

import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  const { curUser } = useContext(AuthContext);

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            curUser.uid > action.payload.uid
              ? curUser.uid + action.payload.uid
              : action.payload.uid + curUser.uid,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
}
