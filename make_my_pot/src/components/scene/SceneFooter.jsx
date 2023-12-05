import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Typography } from "@mui/material";

const SceneFooter = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "30px",
        alignItems: "center",
        height: "10%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {" "}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <ArrowForwardIcon
          style={{
            border: "solid 2px black",
            borderRadius: "50%",
            borderColor: "orange",
            color: "orange",
            fontSize: "24px",
            opacity: 0.75,
            marginRight: "20px",
          }}
          onClick={() => alert("don't touch me")}
        />
        <Typography sx={{ fontSize: "24px" }}>Move to ur finances</Typography>
      </div>
    </div>
  );
};

export default SceneFooter;
