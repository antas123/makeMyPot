import React from "react";
import { getHeightForComponent } from "../../utils/helpers";

const FooterContentWrapper = ({ children, thoughtCount, component }) => {
  const height = getHeightForComponent(thoughtCount, component);
  return (
    <div
      style={{
        height,
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
