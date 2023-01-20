import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import { authContext } from './Context/authContext';

const Login = () => {
  const {state,dispatch}=useContext(authContext);
  console.log("state",state);
  
  const Login=()=>{
    dispatch({
      type:"Login",
      payload:true,
    })
  };

  return (  
    <div>Login
        <Button variant="contained" onClick={()=>Login()}>Login</Button>
        <Link to="/home">Home</Link>
        <Link to="/Profile">Profile</Link>
    </div>
  )
}

export default Login