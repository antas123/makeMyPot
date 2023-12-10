import React from "react";
import { Button } from "@mui/material";

const Part1 = () => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "65vw",
        height: "40vh",
        margin: "auto",
      }}
    >
      <p style={{ color: "#6B3500", fontFamily: "Roboto", fontSize: "45px" }}>
        Track, Manage, Achieve: <br />
        Your Pot of Financial Prosperity{" "}
      </p>
      <h5 style={{ color: "#6B3500" }}>
        Where your income meetssmart financial management, and dreams becomes
        achievable
      </h5>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#F9B572",
          color: "black",
          width: "45%",
          "&:hover": {
            backgroundColor: "#FFE382",
          },
          marginTop: "20px",
        }}
      >
        Take Control of Your Money Today
      </Button>
    </div>
  );
};

export default Part1;
