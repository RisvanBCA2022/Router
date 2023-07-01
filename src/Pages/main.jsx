import React from 'react'
import { Routes,Route,Link } from "react-router-dom"
import Login from './Login'
import Register from './Register.Jsx'
import Home from './Home'
import './index.css'

function Main() {
  return (
    <div>


         <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path='login' element={<Login />} />
      </Routes>

    </div>
  )
}

export default Main