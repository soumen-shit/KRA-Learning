import React from "react";

const page = async ({ params }) => {
  //   console.log(await params);
  const { username } = await params;
  return (
    <div>
      username:-
      <h2>{username}</h2>
    </div>
  );
  h;
};

export default page;
