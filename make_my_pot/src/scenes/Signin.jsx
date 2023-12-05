import React from "react";

const Signin = () => {
  const containerStyle = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyle = {
    height: "75vh",
    width: "40vw",
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}></div>
    </div>
  );
};

export default Signin;
