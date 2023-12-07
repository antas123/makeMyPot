import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from "@mui/material";


const LoginFooter = ({text}) => {
  return (
    <div style={{marginTop:"20px"}}>
    <Button variant="contained" sx={{backgroundColor:"#F9B572", color:"black", width:"70%","&:hover": {
  backgroundColor: "#FFE382",
},}} >{text}</Button>
<h4>OR</h4>
<Button sx={{width:"70%", color:"black", borderColor:"black","&:hover": {
  backgroundColor: "white",
  color:"grey",
  border:"1px solid grey"
}}} variant="outlined" startIcon={<GoogleIcon />}>
Continue with Google
</Button>
    </div>
  )
}

export default LoginFooter