import React from "react";
import { Input } from "@mui/material";

const InputtableComponent = ({ text, width, symbol }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {symbol ? <div
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
      </div> : null}
      <Input
        placeholder={text}
        sx={{
          border: "1px solid grey",
          borderBottom: "0",
          padding: "0 20px",
          width: width,
          textAlign: "center",
          padding:"0 30px"
        }}
      />
    </div>
  );
};

export default InputtableComponent;
