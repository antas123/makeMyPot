import { Typography } from "@mui/material";
import React from "react";
import {
  pageToRoute,
  sideBarOptions,
  tabOptionToRoute,
} from "../../constants/NavigationData";
import NumberIcon from "../NumberIcon";
import styles from "./extras.module.css";
import { Link } from "react-router-dom";

const Sidebar = ({ activePage, activeTabOption, setActiveTabOption }) => {
  const activePageOptions = [...(sideBarOptions[activePage] || [])];

  return (
    <div
      style={{
        height: "50%",
        marginTop: "70px",
        padding: "5px",
      }}
    >
      {activePageOptions.map((option, ind) => (
        <Link
          to={`${pageToRoute(activePage)}/${ind + 1}`}
          style={{ textDecoration: "none" }}
        >
          <div
            key={option}
            className={`${styles.mainbox} ${
              ind + 1 === activeTabOption ? styles.activeBox : ""
            }`}
            onClick={() => setActiveTabOption(ind + 1)}
          >
            <div className={styles.menuNumber}>
              <NumberIcon number={ind + 1} />
            </div>
            <div className={styles.menulist}>
              <Typography
                variant="p"
                sx={{
                  color: "black",
                  fontSize: "18px",
                }}
                key={option}
              >
                {option}
              </Typography>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
