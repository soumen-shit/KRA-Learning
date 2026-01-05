"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const usePathName = usePathname();
  return (
    <nav className="w-full h-20 bg-white flex justify-between items-center px-5 fixed top-0">
      <div className="text-black font-bold text-2xl">🌍Travel Guide</div>
      <div>
        <ul className="flex gap-10">
          <Link
            href={"/"}
            className={usePathName == "/" ? "text-blue-500" : ""}
          >
            <li>Home</li>
          </Link>
          <Link
            href={"/destinations"}
            className={usePathName == "/destinations" ? "text-blue-500" : ""}
          >
            <li>Destinations</li>
          </Link>
          <Link
            href={"/contact"}
            className={usePathName == "/contact" ? "text-blue-500" : ""}
          >
            <li>contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
