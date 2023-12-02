import React from "react";

const MainContentWrapper = ({ children, isDashboard }) => {
  return (
    <div
      style={{
        height: isDashboard ? "400px" : "350px",
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
