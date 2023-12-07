import React from 'react'
import logo from "../scenes/financialDashboard/imagesDashboard/LOGO.png"


const LoginHeader = ({text1, text2, text3}) => {
  return (
    <div>
    <img src={logo} alt="" />
    <h2>{text1}</h2>
    <p style={{marginTop:"35px"}}> {text2}<span style={{color:"yellowgreen", fontWeight:"bold"}} >{text3}</span> </p> 
    </div>
  )
}

export default LoginHeader