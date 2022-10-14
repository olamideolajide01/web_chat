import React from "react";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <>
      <div className="flex h-screen items-center justify-center  px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900">
              Register
            </h2>
          </div>
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
