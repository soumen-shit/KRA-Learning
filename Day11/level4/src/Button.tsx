import React, { useRef } from "react";
type buttonProps = {
  data: string;
};
const Button = ({ data }: buttonProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      {data}

      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Button;
