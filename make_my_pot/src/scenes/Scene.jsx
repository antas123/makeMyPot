import React from "react";

const Scene = ({ children }) => {
  return (
    <div className="m" style={{ flex: 4, marginTop: "80px" }}>
      {children}
    </div>
  );
};

export default Scene;
