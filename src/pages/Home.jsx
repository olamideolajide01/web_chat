import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen  px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900">
              WELCOME TO YOFOCHAT WEB APP
            </h2>
          </div>

          <div className="flex space-x-6 text-center justify-center mt-4">
            <Link to={`/register`}>
              <button className="text-white  hover:text-success underline">
                REGISTER
              </button>
            </Link>
            <Link to={`/login`}>
              <button className="text-white hover:text-primary underline">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
