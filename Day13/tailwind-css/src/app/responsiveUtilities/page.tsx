import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col gap-5">
      <div className="bg-white p-4 sm:p-6 lg:p-10 rounded-lg max-w-sm sm:max-w-md lg:max-w-lg">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
          Responsive Tailwind
        </h1>
        <p className="mt-2 sm: text-base text-gray-600">
          {" "}
          Mobile first → desktop enhanced
        </p>
      </div>
      <div className="border mt-2 flex sm:flex-col md:flex-row justify-center items-center gap-4 sm:h-48 sm:w-48 md:h-60 md:w-60">
        <div className="h-40 w-40 bg-amber-500"></div>
        <div className="h-40 w-40 bg-emerald-500"></div>
        <div className="h-40 w-40 bg-red-700"></div>
      </div>
    </div>
  );
};

export default page;
