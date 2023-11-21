import { Container, Typography } from "@mui/material";
import React from "react";
import { sideBarOptions } from "../../constant";
import NumberIcon from "../NumberIcon";

const yourFinancials = [...sideBarOptions.yourFinanicals];
console.log(yourFinancials);

const Sidebar = () => {
  return (
    <div
      className="m"
      style={{
        height: "calc(100vh - 100px)",
        flex: 1,
        marginTop: "80px",
      }}
    >
      <Container>
        {yourFinancials.map((fin, ind) => (
          <div
            style={{
              display: "flex",
              cursor: "pointer",
            }}
          >
            <NumberIcon number={ind + 1} key={fin} />
            <Typography
              variant="p"
              sx={{
                color: "black",
                fontSize: "20px",
                marginBottom: "10px",
              }}
              key={fin}
            >
              {fin}
            </Typography>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Sidebar;
