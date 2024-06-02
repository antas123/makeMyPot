import React from "react";
import logo from "../scenes/financialDashboard/imagesDashboard/LOGO.png";
import { useNavigate } from "react-router-dom";

const LoginHeader = ({ text1, text2, text3 }) => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(text3 === 'Sign up now' ? "/signin" : "/login");
  };

  return (
    <div>
      <img src={logo} alt="" />
      <h2>{text1}</h2>
      <p style={{ marginTop: "35px" }}>
        {" "}
        {text2}{" "}
        <span style={{ color: "yellowgreen", fontWeight: "bold", cursor:'pointer' }}  onClick={handleLoginClick}>
          {text3}
        </span>{" "}
      </p>
    </div>
  );
};

export default LoginHeader;
