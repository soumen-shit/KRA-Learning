"use client";
import { useParams } from "next/navigation";
import React from "react";
import parisImg from "@/assets/paris.jpg";
import tokioImg from "@/assets/tokio.jpeg";
import newYorkImg from "@/assets/paris.jpg";
import Image from "next/image";

const Page = () => {
  const { city } = useParams();
  console.log(city);
  return (
    <div className="text-white mt-25 ml-10 w-[50%] ">
      {city} is beautyfull city
      {city == "Paris" && (
        <Image src={parisImg} alt="parisImg" width={400} height={400} />
      )}
      {city == "Tokio" && (
        <Image src={tokioImg} alt="tokioImg" width={400} height={400} />
      )}
      {city == "New York" && (
        <Image src={newYorkImg} alt="newYork" width={400} height={400} />
      )}
    </div>
  );
};

export default Page;
