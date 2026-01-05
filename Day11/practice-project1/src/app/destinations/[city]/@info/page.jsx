"use client";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { city } = useParams();
  return (
    <div className="flex flex-col">
      <div className="text-white mt-25 w-[50%] text-2xl">Description</div>
      <div className="text-white mt-10">{city} is the best city </div>
    </div>
  );
};

export default Page;
