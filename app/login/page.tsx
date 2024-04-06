import InputField from "@/components/form/input.form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center h-[40rem] dark:bg-primary-dark dark:text-white">
      <div className="text-center w-full">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            Welcome to Engima
          </h1>
          <p className=" text-gray-500 md:text-xl dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, ipsum ad cumque excepturi doloremque assumenda tempora
            aut, placeat sunt pariatur culpa nesciunt rerum error possimus.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 w-full">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
            Sign in to Engima
          </h2>
          <p className=" flex items-cener justify-center"></p>
        </div>
        <div className="w-full max-w-sm space-y-4">
          <div className="space-y-2">
            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="Please enter your email"
            />
          </div>
          <div className="space-y-2">
            <InputField
              label="Password"
              type="password"
              name="password"
              placeholder="Please enter your password"
            />
          </div>
          <Link className="w-full" href="#">
            <Button
              type="submit"
              className="w-full rounded-md my-2 dark:bg-white dark:text-black text-white"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
