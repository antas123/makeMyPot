import { Typography } from "@mui/material";
import React from "react";

const TextCell = () => {
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
      <div style={{ padding: "5px", textAlign: "center" }}>table 1</div>
    </Typography>
  );
};

export default TextCell;
