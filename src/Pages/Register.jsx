import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div><h1>Register new Accout</h1>
    <form>
    <span>Name</span><br />
        <input type='text' placeholder='Enter name' /><br />
        <span>Email</span><br />
        <input type='text' placeholder='Enter email' /><br />
        <span>Password</span><br />
        <input type='password' placeholder='Enter password' /><br />
        <br />
        <Link to={"/login"}>
            <button>login</button>
        </Link>
        </form>
        
    </div>

  )
}

export default Register