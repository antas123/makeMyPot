import React from "react";
import { Typography, Input } from "@mui/material";

const AmountTable = ({
  onHead,
  text = "Enter the amount...",
  value,
  changeValue,
}) => {
  return (
    <div
      style={{
        display: "flex",
        height: onHead ? "40px" : "50px",
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "20px",
        marginRight: "20px",
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
        <div style={{ padding: "4px", textAlign: "center" }}>Rs</div>
      </Typography>
      <Input
        placeholder={text}
        sx={{
          width: "max-content",
          padding: "0 20px",
          border: "1px solid gray",
          borderLeft: "none",
          fontSize: "20px",
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        value={value}
        onChange={(e) => changeValue(e.target.value)}
      />
    </div>
  );
};

export default AmountTable;
