import React from "react";
import potimg from "./homeimages/pana.png";
import { Button } from "@mui/material";

const Part3 = () => {
  return (
    <div
      style={{
        marginTop: "250px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 30px",
      }}
    >
      <div style={{ flex: "1" }}>
        <img style={{width:"30vw"}} src={potimg} />
      </div>
      <div style={{ flex: "1", textAlign: "left" }}>
        <h1 style={{ color: "#6B3500" }}>About MakeMyPot</h1>
        <p style={{ color: "#6B3500" }}>
          Welcome to MakeMyPot – your partner for simple, holistic finance.
          Track income, manage expenses, and achieve goals effortlessly. Join us
          to turn financial ambitions into reality.
        </p>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F9B572",
            color: "#6B3500",
            width: "60%",
            "&:hover": {
              backgroundColor: "#FFE382",
            },
            marginTop: "20px",
          }}
        >
          Start Your Financial Journey
        </Button>
      </div>
    </div>
  );
};

export default Part3;
