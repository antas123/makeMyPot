import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NumberIcon = ({ number }) => {
  // Customize the styling using MUI components
  const boxStyle = {
    width: "30px",
    height: "30px",
    backgroundColor: "orange", // Light Orange color
    display: "flex",
    opacity: 0.75,
    justifyContent: "center",
    alignItems: "center",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const textStyle = {
    color: "white", // Text color
    fontWeight: "bolder",
    fontSize: "18px",
  };

  return (
    <Box sx={boxStyle}>
      <Typography sx={textStyle}>{number}</Typography>
    </Box>
  );
};

export default NumberIcon;
