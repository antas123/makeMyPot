import { Typography } from "@mui/material";
import React from "react";

const TextCell = ({ text }) => {
  return (
    <Typography
      sx={{
        flex: 1,
        fontSize: "20px",
        fontFamily: "sans-serif",
        fontWeight: "lighter",
        border: "1px solid black",
      }}
    >
      <div style={{ padding: "4px", paddingLeft: "20px" }}>{text}</div>
    </Typography>
  );
};

export default TextCell;
