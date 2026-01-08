"use client";
import React, { useState } from "react";

const Page = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col gap-2">
      <div
        className={`border h-100 w-100 ${
          isActive ? "bg-green-700" : "bg-gray-600"
        }`}
      ></div>
      <button
        onClick={() => setIsActive(!isActive)}
        className={` px-6 py-2 rounded-md  font-medium
          transition cursor-pointer ${
            isActive
              ? "bg-green-600 text-white hover:bg-green-400 hover:text-black"
              : "bg-gray-400 text-black hover:bg-gray-600 hover:text-white"
          }`}
      >
        {isActive ? "Active" : "Inactive"}
      </button>
    </div>
  );
};

export default Page;
