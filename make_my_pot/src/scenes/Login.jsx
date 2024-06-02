import React, { useState } from "react";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

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
      const response = await fetch(
        "https://make-my-pot-backend-1.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            FullName: formData.fullName,
            Email: formData.email,
            Password: formData.password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(response.status === 500 ? "server error" : "User already exists");
      }
      const data = await response.json();
      console.log("Registration successful", data);
      alert(
        "Your sign-up was successfull , now please login using the same details"
      );

    } catch (err) {
      console.error("Registration failed", err);
      setError("Registration failed. Please try again.");
      alert(err);
    }
  };
  return (
    <>
      <div
        style={{
          height: "85vh",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px 40px",
          textAlign: "center",
          width: "34vw",
          margin: "25px auto",
        }}
      >
        <LoginHeader
          text1={"Welcome to MakeMyPot, Sign up to continue"}
          text2={"Already have an account?"}
          text3={"Login here"}
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
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            sx={{ width: "70%" }}
          />
          <TextField
            id="outlined-search"
            name="email"
            label="Email adderess"
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
              type={showPassword ? "text" : "password"}
              name="password"
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
        
        </div>
        <LoginFooter handleSubmit={handleSubmit} text={"Sign up"} />
      </div>
    </>
  );
};

export default Login;
