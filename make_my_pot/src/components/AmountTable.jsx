import React from "react";
import { Typography, Input } from "@mui/material";
import { formatIndianNumber } from "../utils/helpers";

const AmountTable = ({
  onHead,
  text = "Enter the amount...",
  value,
  changeValue,
  symbol = "Rs",
}) => {
  return (
    <div
      style={{
        display: "flex",
        height: onHead ? "40px" : "50px",
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "10px",
      }}
    >
      <Typography
        sx={{
          width: "50px",
          border: "1px solid gray",
          alignContent: "center",
          justifyContent: "center",
          fontSize: "18.5px",
          textAlign: "center",
        }}
      >
        <div style={{ padding: "4px", textAlign: "center" }}>{symbol}</div>
      </Typography>
      <Input
        placeholder={text}
        sx={{
          width: "max-content",
          padding: "0 20px",
          border: "1px solid gray",
          borderBottom: "none",
          borderLeft: "none",
          fontSize: "19px",
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center",
          outline: "none",
        }}
        value={symbol === "Rs" ? formatIndianNumber(value) : value}
        onChange={(e) => {
          const inputValue = e.target.value;
          const numericValue = parseFloat(inputValue.replace(/,/g, "")) || 0;
          changeValue(numericValue.toString());
        }}
      />
    </div>
  );
};

export default AmountTable;
