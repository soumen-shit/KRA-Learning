"use client";

import Button from "@/Button";
import { ChangeEvent, useRef, useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleChange = (e: ChangeEvent) => {
    console.log(e.target);
    console.log(inputRef.current?.focus());
  };

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col">
      {count}
      <button className="border p-4 m-4" onClick={handleInc}>
        INC
      </button>
      <input onChange={handleChange} ref={inputRef} />
      <Button data="soumen" />
    </div>
  );
}
