import { Typography } from "@mui/material";
import React from "react";
import styles from "./RatioCard.module.css";
import DonutChart from "../../DonutChart";

const RatioCard = ({ title, IconComponent, content, pp }) => {
  return (
    <div className={styles.ratioCardContainer}>
      <div className={styles.ratioCardHeader}>
        <Typography sx={{ fontSize: "18px", fontWeight: "lighter" }}>
          {title}
        </Typography>
        <img src={IconComponent} alt="ss" />
      </div>

      <div className={styles.ratioCardInfoContainer}>
        <DonutChart percentage={pp} />
      </div>
      <hr />
      <div className={styles.ratioCardContent}>
        <Typography sx={{ fontSize: "14px" }}>{content}</Typography>
      </div>
    </div>
  );
};

export default RatioCard;
