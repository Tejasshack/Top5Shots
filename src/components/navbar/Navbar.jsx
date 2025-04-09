"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r bg-white text-white p-2  shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl text-black font-extrabold tracking-wide font-serif ">
          <Link href="/">Top5shots</Link>
        </div>
         {/* Search Bar */}
         <div className="hidden md:flex items-center bg-white text-gray-900 rounded-full px-2 py-2 outline mr-30">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none bg-transparent w-38"
            />
            <button className="text-purple-600 font-bold">🔍</button>
          </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">&times;</span> // Close (X)
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger Menu
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static left-0 top-16 w-full md:w-auto bg-amber-50 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "News", path: "/news" },
            { name: "Viral Stories", path: "/viralstories" },
            { name: "Results", path: "/results" },
            { name: "Match Score", path: "/matchscore" },
            { name: "Contest", path: "/contest" },
          ].map((item, index) => (
            <li
              key={index}
              className="relative text-balance font-mono  md:my-1 px-2 py-2 rounded-bl-2xl rounded-tr-2xl  transition-all duration-300 hover:bg-gray-100 hover:shadow-lg mb-2"
            >
              <Link
                href={item.path}
                className="relative flex items-center justify-center w-auto h-auto text-black hover:text-purple-600 transition duration-300"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-purple-600 transition-all duration-300 origin-center scale-x-0 hover:scale-x-100"></span>
              </Link>
            </li>
          ))}
         

          {/* Login/Signup Buttons Combined */}
          <li className="flex items-center space-x-2 mt-4 md:mt-0">
            <Link href="/login">
              <button className="bg-white font-mono text-purple-600 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
                Login
              </button>
            </Link>
            {/* <span className="text-white font-extrabol">/</span> */}
            <Link href="/signup">
              <button className="bg-purple-600 font-mono text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-purple-500 transition">
                Signup
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
