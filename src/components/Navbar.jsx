import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar justify-between bg-primary text-primary-content">
      <span className="btn btn-ghost normal-case text-xl">Web Chat</span>

      <ul className="flex space-x-5">
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/register`}>Register</Link>
        </li>
        <li>
          <Link to={`/login`}>Login</Link>
        </li>
      </ul>
    </div>
  );
}
