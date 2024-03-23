import React, { useState } from "react";
import { Checkbox, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div
        style={{
          height: "70vh",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px 40px",
          textAlign: "center",
          width: "34vw",
          margin: "35px auto",
        }}
      >
        <LoginHeader
          text1={"Welcome Back! Log in to your account"}
          text2={"Don't have any account"}
          text3={"Sign up now"}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <TextField
            id="outlined-search"
            label="Email adderess"
            sx={{ width: "70%" }}
          />
          <FormControl sx={{ width: "70%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <div style={{ textAlign: "left", width: "70%", marginTop: "-20px" }}>
            <Checkbox /> remember me
          </div>
        </div>
        <LoginFooter text={"Login"} />
      </div>
    </>
  );
};

export default Signin;
