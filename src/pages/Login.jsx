import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center h-screen  px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <LoginForm />
          <Link to={`/register`}>
            {" "}
            <p className="text-center mt-3 cursor-pointer ">
              Don't have an account?
              <strong className="underline">Register</strong>{" "}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
