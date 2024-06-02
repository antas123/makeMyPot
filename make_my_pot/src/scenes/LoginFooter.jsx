import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";

const LoginFooter = ({ text,handleSubmit }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Button
      onClick={handleSubmit}
        variant="contained"
        sx={{
          backgroundColor: "#F9B572",
          color: "black",
          width: "70%",
          "&:hover": {
            backgroundColor: "#FFE382",
          },
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default LoginFooter;
