import React from "react";

const MainContentWrapper = ({ children }) => {
  return (
    <div
      style={{
        height: "400px",
        backgroundColor: "#F5F7F8",
        overflow: "auto",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      {children}
    </div>
  );
};

export default MainContentWrapper;
