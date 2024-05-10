import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="flex flex-col gap-5 sm:gap-10">
        <Navbar />

        <div className="p-4 w-full z-10 relative text-center mt-10 sm:mt-20">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Your Feedback Matters
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Give your Feedback by register and login into the the system 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            labore dignissimos necessitatibus aspernatur 
          </p>
          <div className="mt-4 ">
            <Link to={"/Login"}>
              <button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-2  dark:border-rose-600 shadow-lg shadow-rose-500 rounded-lg p-3"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
