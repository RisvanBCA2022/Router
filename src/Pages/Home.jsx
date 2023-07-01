import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Home() {
    
  return (

    <div>
        <h1>Home</h1>
        <h1>Hello there user </h1>
      <p>This is your  User Profile page</p>

      <Link to={'/'}><button>Register</button></Link>
      <Link to={'/login'}><button>Login</button></Link>
    </div>
  )
}

export default Home