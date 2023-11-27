import { Typography } from "@mui/material";
import React from "react";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";

const StatCard = ({ title, IconComponent, data, content, extraInfo }) => {
  return (
    <div
      style={{
        padding: "3px",
        backgroundColor: "white",
        margin: "10px",
        marginTop: "15px",
        height: "175px",
      }}
    >
      <Typography sx={{ fontSize: "18px", fontWeight: "lighter" }}>
        {title}
      </Typography>
      <div style={{ margin: "8px", height: "100px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "baseline",
          }}
        >
          <div
            style={{ textAlign: "center", color: "green", fontWeight: "light" }}
          >
            {IconComponent}
          </div>
          <div style={{ textAlign: "center", color: "green" }}>
            <Typography sx={{ fontSize: "48px" }}>{data}</Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-10px",
          }}
        >
          <Typography>{extraInfo}</Typography>
        </div>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "1px",
          fontSize: "18px",
        }}
      >
        <Typography>{content}</Typography>
      </div>
    </div>
  );
};

export default StatCard;
