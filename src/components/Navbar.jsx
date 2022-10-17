import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar fixed justify-between bg-primary text-primary-content">
      <Link to={`/`}>
        <span className="text-xl font-bold cursor-pointer ">YofoChat</span>
      </Link>

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
        <li>
          <Link to={`/dashboard`}>Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}
