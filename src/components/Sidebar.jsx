import React from "react";
import Chats from "./Chats";
import NavAppbar from "./NavAppbar";
import Search from "./Search";

export default function Sidebar() {
  return (
    <div>
      <NavAppbar />
      <Search />
      <Chats />
    </div>
  );
}
