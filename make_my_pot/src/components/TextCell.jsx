import { Input, Typography } from "@mui/material";
import React from "react";

const TextCell = ({ text, value, updateVal, ...props }) => {
  return (
    <Input
      sx={{
        flex: 1,
        fontSize: "14px",
        fontFamily: "sans-serif",
        fontWeight: "lighter",
        border: "1px solid black",
        padding: "4px",
        paddingLeft: "10px",
        margin: "0 6px",
      }}
      {...props}
      placeholder={text}
      value={value}
      onChange={updateVal}
    />
  );
};

export default TextCell;
