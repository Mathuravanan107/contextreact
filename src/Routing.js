import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home';
import Login from './Login';
import Profile from './Profile'
import { authContext } from './Context/authContext';
import { useReducer } from "react";
import { authReducer, initialState } from './Context/reducer';

const Routing = () => {
   const [state,dispatch]=useReducer(authReducer,initialState)
  return (
    <div>
       <authContext.Provider value={{state,dispatch}}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='/Home' element={<Home/>}></Route> 
              <Route path='/Profile' element={<Profile/>}></Route> 
              <Route path='*' element={<h2>Page is Not found!</h2>} ></Route>   
            </Routes>
          </BrowserRouter>
        </authContext.Provider>
    </div>
  )
}

export default Routing