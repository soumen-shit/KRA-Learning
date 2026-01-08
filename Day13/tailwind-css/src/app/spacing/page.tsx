import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col">
        <h1 className="text-xl font-semibold text-gray-800">
          Spacing in Tailwind
        </h1>
        <p className="mt-2 text-gray-600">
          Margin creates space between elements
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-500">
          Action
        </button>
        <div className="h-60 w-200 border mt-2 flex justify-center items-center gap-4">
          <div className="h-50 w-50 border bg-amber-500"></div>
          <div className="h-50 w-50 border bg-emerald-500"></div>
          <div className="h-50 w-50 border bg-red-700"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
