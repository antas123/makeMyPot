import React from "react";

const FooterContentWrapper = ({ children }) => {
  return (
    <div
      style={{
        height: "150px",
        overflow: "auto",
        paddingBottom: "5px",
        backgroundColor: "#f5f7f8",
      }}
    >
      {children}
    </div>
  );
};

export default FooterContentWrapper;
