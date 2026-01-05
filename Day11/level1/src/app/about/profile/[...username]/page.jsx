import React from "react";

const page = async ({ params }) => {
  const data = await params;
  console.log(data.username[0]);
  return <div>data</div>;
};

export default page;
