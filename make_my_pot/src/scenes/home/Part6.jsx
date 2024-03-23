import React from "react";
import boy from "./homeimages/boy.png";
import { Button } from "@mui/material";


const Part6 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FFFAF4",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px",
        gap: "2em",
      }}
    >
      <div style={{ color: "#6B3500", textAlign: "left", width: "40vw" }}>
        <h1>Still using a calculator to monitor your finances?</h1>
        <p>
          Seamlessly integrate income tracking, expense management, debt
          control, and goal realization with MakeMyPot - your partner for
          simple, holistic finance. Join us to turn financial ambitions into
          reality.
        </p>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F9B572",
            color: "black",
            width: "20vw",
            "&:hover": {
              backgroundColor: "#FFE382",
            },
            marginTop: "20px",
          }}
        >
          Get Started Now
        </Button>
      </div>
      <div>
        <img style={{ height: "35vh", width: "30vw" }} src={boy} alt="" />
      </div>
    </div>
  );
};

export default Part6;
