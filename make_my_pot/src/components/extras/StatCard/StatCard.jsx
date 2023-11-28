import { Typography } from "@mui/material";
import React from "react";
import styles from "./StatCard.module.css";

const StatCard = ({
  title,
  IconComponent,
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
          <div className={styles.statCardIcon}>
            {/* {images.length === 1 && ( */}
            <img
              src={IconComponent}
              alt="aa"
              style={{ height: "60px", width: "65px" }}
            />
            {/* // )} */}
            {/* {images.length === 2 && (
              <>
                <img src="image1.jpg" alt="Image 1" class="image1" />
                <img src="image2.jpg" alt="Image 2" class="image2" />
              </>
            )} */}
          </div>
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
