import React, { useState,useContext } from 'react'
import {Button,TextField} from "@mui/material";
import { authContext } from './Context/authContext';

const Home = () => {
  const [productName,setProductName]=useState("");
  const [productPrice,setProductPrice]=useState(null);

  const {state,dispatch}=useContext(authContext)

  const onSubmit=()=>{
    let temp=[];
    if(state.products.length>0){
      temp=[...state.products,{productName,productPrice}];
    }else{
      temp=[{productName,productPrice}];
    }
    dispatch({
      type:"Add_To_Cart",
      payload:temp,
    });
  };
 
  return (
    <div style={{
      display:"flex",
      flex:1,
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
    }}>
      <div style={{width:"30w",flexDirection:"column",display:"flex"}}>
          <TextField  
          id="outlined-basic" 
          label="Username" 
          variant="outlined"
          onChange={(ev)=>setProductName(ev.target.value)}
          />
           <br></br>
          <TextField  id="outlined-basic" 
             label="Price" variant="outlined"
             onChange={(ev)=>setProductPrice(ev.target.value)}
             /><br></br>
          <Button variant="contained" color="error" onClick={()=> onSubmit()}>ADD</Button>
      </div>
    </div>
  )
}

export default Home