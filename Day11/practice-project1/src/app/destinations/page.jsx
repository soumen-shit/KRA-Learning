"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const dest = ["Paris", "Tokio", "New york"];
  return (
    <div className="flex justify-center items-center text-white h-full flex-col gap-5">
      <div className="font-bold text-2xl">Choose Your Destination</div>
      <div className="flex flex-col gap-10">
        {dest.map((de, i) => (
          <div
            key={i}
            className="text-black font-bold text-2xl items-center justify-center rounded-2xl w-50 h-25 bg-white flex hover:bg-amber-100 cursor-pointer transition-all"
            onClick={() => router.push(`/destinations/${de}`)}
          >
            {de}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
