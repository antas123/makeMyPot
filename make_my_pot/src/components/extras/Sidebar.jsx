import { Container, Typography } from "@mui/material";
import React from "react";
import { sideBarOptions } from "../../constant";
import NumberIcon from "../NumberIcon";
import styles from "./extras.module.css";

const yourFinancials = [...sideBarOptions.yourFinanicals];
console.log(yourFinancials);

const Sidebar = () => {
  return (
    <div
      className="m"
      style={{
        height: "50%",
        marginTop: "50px",
        padding: "5px",
      }}
    >
      {yourFinancials.map((fin, ind) => (
        <div key={fin} className={styles.mainbox}>
          <div className={styles.menuNumber}>
            <NumberIcon number={ind + 1} />
          </div>
          <div className={styles.menulist}>
            <Typography
              variant="p"
              sx={{
                color: "black",
                fontSize: "18px",
                fontFamily: 'Roboto',
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              }}
              key={fin}
            >
              {fin}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
