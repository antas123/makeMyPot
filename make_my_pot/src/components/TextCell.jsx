import { Input, Typography } from "@mui/material";
import React from "react";

const TextCell = ({ text, ...props }) => {
  return (
    <Input
      sx={{
        flex: 1,
        fontSize: "15px",
        fontFamily: "sans-serif",
        fontWeight: "lighter",
        border: "1px solid black",
        padding: "4px",
        paddingLeft: "20px",
      }}
      {...props}
      placeholder={text}
    />
  );
};

export default TextCell;
