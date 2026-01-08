import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <article className="bg-white p-6 rounded-lg max-w-md">
        <h1 className="text-2xl font-bold leading-tight tracking-tight">
          Typography in Tailwind
        </h1>
        <p className="mt-3 text-base">
          {" "}
          Typography controls how readable and professional your UI feels.
          Tailwind lets you control every part using utilities.
        </p>
        <p className="mt-2 text-sm text-gray-500"> Used in cards, dashboards, blogs, forms</p>
      </article>
    </div>
  );
};

export default page;
