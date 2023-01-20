import React from 'react'
import { authContext } from './Context/authContext'
import { useContext } from 'react'

const Profile = () => {
  const {state}=useContext(authContext);
  return (
    <div>profile
        {state.products.map((product,index)=>(
        <div key={index}>
        <h1>{product.productName}</h1>
        <h2>{product.productPrice}</h2>
        </div>
      ))}
    </div>
  )
}

export default Profile
