import { Typography } from "@mui/material";
import React from "react";
import styles from "./TableCard.module.css";

const TableCard = ({ title, data, color, type }) => {
  return (
    <div className={styles.statCardContainer}>
      <Typography
        sx={{ fontSize: "18px", fontWeight: "lighter", marginBottom: "20px" }}
      >
        {title}
      </Typography>
      <div className={styles.statCardInfoContainer}>
        {data.length ? (
          data?.map((x) => {
            return (
              <div className={styles.tableDiv}>
                <div>{x.title}</div>
                <div style={{ width: "100px" }}>Rs {x.value}</div>
              </div>
            );
          })
        ) : (
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Please enter {type} to see here
          </div>
        )}
      </div>
    </div>
  );
};

export default TableCard;
