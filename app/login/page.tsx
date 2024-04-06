import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="grid items-center justify-center w-full my-48 gap-6 px-4 text-center lg:grid-cols-2 xl:px-6">
        <div className="text-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Welcome to Engima
            </h1>
            <p className=" text-gray-500 md:text-xl dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos, ipsum ad cumque excepturi doloremque assumenda
              tempora aut, placeat sunt pariatur culpa nesciunt rerum error
              possimus.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Sign in to Engima
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Access your account
            </p>
          </div>
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <input id="email" placeholder="Email" />
            </div>
            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <input id="password" placeholder="Password" type="password" />
            </div>
            <Link className="w-full" href="#">
              <button type="submit">Sign In</button>
            </Link>
            <Link className="text-sm underline" href="#">
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
