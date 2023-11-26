import { Typography } from "@mui/material";
import React from "react";

const AmountTable = ({ onHead }) => {
  return (
    <div
      style={{
        display: "flex",
        height: onHead ? "40px" : "50px",
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "20px", // Add left spacing
        marginRight: "20px", // Add right spacing
      }}
    >
      <Typography
        sx={{
          width: "70px",
          border: "1px solid gray",
          alignContent: "center",
          justifyContent: "center",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        <div style={{ padding: "5px", textAlign: "center" }}>Rs</div>
      </Typography>
      <Typography
        sx={{
          width: "max-content",
          padding: "0 50px",
          border: "1px solid gray",
          borderLeft: "none",
          fontSize: "20px",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ padding: "5px", textAlign: "center" }}>5,28,800</div>
      </Typography>
    </div>
  );
};

export default AmountTable;
