import React from "react";
import { getHeightForComponent } from "../../utils/helpers";

const MainContentWrapper = ({ children, thoughtCount, component }) => {
  const height = getHeightForComponent(thoughtCount, component);
  return (
    <div
      style={{
        backgroundColor: "#f5f7f8",
        height,
        marginBottom: "10px",
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default MainContentWrapper;
