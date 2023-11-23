import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { formGroupClasses } from "@mui/material";
import Sidebar from "./Sidebar";

function TempDrawer() {
  const [isOpen, setIsOpen] = useState(formGroupClasses);

  return (
    <>
      <Button
        size="large"
        edge="start"
        onClick={() => setIsOpen(true)}
        style={{ position: "absolute", bottom: "45vh", left: "-5px" }}
      >
        <KeyboardArrowRightIcon
          size="xs"
          sx={{
            border: "solid 2px black", // Set border style, width, and color
            borderRadius: "50%",
            borderColor: "orange",
            color: "orange",
            opacity: 0.5,
            width: "50px",
            height: "50px",
          }}
        />
      </Button>
      <div style={{ position: "absolute" }}>
        <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
          <Box p={2} width="250px" textAlign="center">
            <Sidebar />
          </Box>
        </Drawer>
      </div>
    </>
  );
}

export default TempDrawer;
