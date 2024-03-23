import React from "react";
import grl from "./homeimages/girl.png";
import DoneIcon from "@mui/icons-material/Done";

const Part5 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: "auto",
        gap: "15rem",
        padding: "50px 40px",
        marginTop: "50px",
      }}
    >
      <img style={{ width: "25vw", height: "35vh" }} src={grl} alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "-170px",
          color: "#6B3500",
        }}
      >
        <h1>Advantages of MakeMyPot</h1>
        <ul style={{ listStyle: "none" }}>
          <li style={{ display: "flex", gap: "1em", marginBottom: "1em" }}>
            <DoneIcon sx={{ color: "orange" }} />{" "}
            <>Evaluate finances professionally</>{" "}
          </li>
          <li style={{ display: "flex", gap: "1em", marginBottom: "1em" }}>
            <DoneIcon sx={{ color: "orange" }} />
            <>Evaluate finances professionally</>{" "}
          </li>
          <li style={{ display: "flex", gap: "1em", marginBottom: "1em" }}>
            <DoneIcon sx={{ color: "orange" }} />{" "}
            <>Evaluate finances professionally</>{" "}
          </li>
          <li style={{ display: "flex", gap: "1em", marginBottom: "1em" }}>
            <DoneIcon sx={{ color: "orange" }} />{" "}
            <>Evaluate finances professionally</>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Part5;
