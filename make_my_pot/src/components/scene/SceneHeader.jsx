import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

const SceneHeader = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "30px",
        alignItems: "center",
        height: "65px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <LocalAtmIcon
          style={{
            fontSize: "40px",
            opacity: 0.75,
            marginRight: "20px",
          }}
        />
        <p
          style={{
            fontSize: "28px",
            fontFamily: "sans-serif",
            fontWeight: "lighter",
          }}
        >
          {title}
        </p>
      </div>

      <ArrowForwardIcon
        style={{
          border: "solid 2px black",
          borderRadius: "50%",
          borderColor: "orange",
          color: "orange",
          fontSize: "30px",
          opacity: 0.75,
          cursor: "pointer",
        }}
        onClick={() => alert("don't touch me")}
      />
    </div>
  );
};

export default SceneHeader;
