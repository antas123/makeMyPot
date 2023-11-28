import { Typography } from "@mui/material";
import React from "react";
import styles from "./StatCard.module.css";

const StatCard = ({
  title,
  IconComponent,
  IconComponent2 = undefined,
  data,
  content,
  extraInfo,
  color,
}) => {
  // const images = [...IconComponent];
  return (
    <div className={styles.statCardContainer}>
      <Typography sx={{ fontSize: "18px", fontWeight: "lighter" }}>
        {title}
      </Typography>
      <div className={styles.statCardInfoContainer}>
        <div className={styles.statCardInfoSubcontainer}>
          {!IconComponent2 ? (
            <div className={styles.statCardIcon}>
              <img
                src={IconComponent}
                alt="aa"
                style={{ height: "60px", width: "65px" }}
              />
            </div>
          ) : (
            <div className={styles.imageContainer2}>
              <img
                src={IconComponent}
                alt="Image 1"
                className={styles.image1}
              />
              <img
                src={IconComponent2}
                alt="Image 2"
                className={styles.image2}
              />
            </div>
          )}
          <div className={styles.statcardData}>
            <Typography sx={{ fontSize: "48px", color: color }}>
              {data}
            </Typography>
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
