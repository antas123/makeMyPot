import { Typography } from "@mui/material";
import React from "react";
import styles from "./StatCard.module.css";
import DonutChart from "../../DonutChart";

const StatCard = ({ title, IconComponent, data, content, extraInfo }) => {
  return (
    <div className={styles.statCardContainer}>
      <Typography sx={{ fontSize: "18px", fontWeight: "lighter" }}>
        {title}
      </Typography>
      <div className={styles.statCardInfoContainer}>
        <div className={styles.statCardInfoSubcontainer}>
          <div className={styles.statCardIcon}>{IconComponent}</div>
          <div className={styles.statcardData}>
            <Typography sx={{ fontSize: "48px" }}>{data}</Typography>
            {/* <DonutChart /> */}
          </div>
        </div>
        <div className={styles.statCardExtraInfo}>
          <Typography>{extraInfo}</Typography>
        </div>
      </div>
      <hr />
      <div className={styles.statCardContent}>
        <Typography>{content}</Typography>
      </div>
    </div>
  );
};

export default StatCard;
