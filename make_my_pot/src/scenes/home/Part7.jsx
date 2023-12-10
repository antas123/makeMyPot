import React from "react";
import rckt from "./homeimages/cuate.png";
import { Button, TextField } from "@mui/material";

const Part7 = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "80px" }}>
      <div style={{ width: "35vw", textAlign: "left", margin: "auto" }}>
        <h1>Get in Touch</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <img style={{ width: "22vw", height: "35vh" }} src={rckt} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "40x",
          width: "30vw",
          margin: "auto",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={6}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F9B572",
            color: "black",
            width: "30vw",
            "&:hover": {
              backgroundColor: "#FFE382",
            },
            marginTop: "20px",
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Part7;
