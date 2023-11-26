import React from "react";

const FooterContentWrapper = ({ children }) => {
  return (
    <div style={{ height: "150px", overflow: "auto", paddingBottom: "5px" }}>
      {children}
    </div>
  );
};

export default FooterContentWrapper;
