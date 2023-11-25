import React from "react";

const Scene = ({ children }) => {
  return (
    <div
      className="m"
      style={{ height: "400px", height: "100%", padding: "0 20px" }}
    >
      {children}
    </div>
  );
};

export default Scene;
