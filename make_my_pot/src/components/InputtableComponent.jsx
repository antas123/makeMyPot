import React from "react";
import { Input } from "@mui/material";

const InputtableComponent = ({ text, width, symbol }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          height: "33px",
          width: "35px",
          border: "1px solid grey",
          borderRight: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>{symbol}</p>
      </div>
      <Input
        placeholder={text}
        sx={{
          border: "1px solid grey",
          borderBottom: "0",
          width: width,
          textAlign: "center",
        }}
      />
    </div>
  );
};

export default InputtableComponent;