import React from "react";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <nav className="fixed top-10 border-2 border-rose-600  w-full md:w-1/2 md:mx-auto bg-zinc-900 text-white rounded-full z-50 mx-5">
            <ul className="flex flex-row justify-center items-center gap-5 sm:gap-10">
                <li className="text-white p-2 ">
                    <Link to={'/'} className="text-white text-lg sm:text-xl font-semibold">
                        Home
                    </Link>
                </li>
                <li className="text-white p-2 ">
                    <Link to={'/Register'} className="text-white text-lg sm:text-xl font-semibold">
                        Register
                    </Link>
                </li>
                <li className="text-white p-2 ">
                    <Link to={'/Login'} className="text-white text-lg sm:text-xl font-semibold">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
