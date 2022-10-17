import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <>
      <div className="flex  items-center justify-center h-screen   px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900">
              Register
            </h2>
          </div>
          <RegisterForm />

          <Link to={`/login`}>
            <p className="text-center mt-3">
              Already have an account?
              <strong className="underline">Login</strong>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
