import React, { useState } from "react";
import { Checkbox, TextField, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://make-my-pot-backend-1.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: formData.email,
          Password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Login successful", data);

      // Handle successful login (e.g., redirect to home page)
      navigate("/home");
    } catch (error) {
      console.error("Login failed", error);
      alert("Please sign up");
    }
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
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <TextField
            id="outlined-search"
            name="email"
            label="Email address"
            value={formData.email}
            onChange={handleChange}
            sx={{ width: "70%" }}
          />
          <FormControl sx={{ width: "70%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
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
          <Button
            type="submit"
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
            Login
          </Button>
        </form>
        {/* <LoginFooter text={"Login"} /> */}
      </div>
    </>
  );
};

export default Signin;
