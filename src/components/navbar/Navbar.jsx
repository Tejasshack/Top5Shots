"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <Link href="/">MySite</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
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
          className={`md:flex md:space-x-6 absolute md:static left-0 top-16 w-full md:w-auto bg-blue-800 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "News", path: "/news" },
            { name: "Viral Stories", path: "/viralStories" },
            { name: "Results", path: "/results" },
            { name: "Match Score", path: "/matchScore" },
            { name: "Contest", path: "/contest" },
          ].map((item, index) => (
            <li key={index} className="text-lg my-2 md:my-0">
              <Link
                href={item.path}
                className="relative hover:text-yellow-300 transition duration-300 after:block after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
