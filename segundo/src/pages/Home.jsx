import React from 'react'
import { Navigate } from "react-router-dom"

const Home = () => {
  const isAuth = true;

  return (
    <div>
      {isAuth
      ? <Navigate to="/" />
      : <Navigate to="/login"/>
      }
      <h1>Home</h1>
    </div>
  )
}

export default Home