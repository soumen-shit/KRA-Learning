import React from "react";

const cityLayout = ({ children, info }) => {
  return (
    <div className="flex">
      {children} {info}
    </div>
  );
};

export default cityLayout;
