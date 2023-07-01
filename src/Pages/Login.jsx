import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Login() {
  return (
    <>
    <h1>Log in</h1>

    <form>
        <label>Email id:</label>
        <br />
        <input type="Email" placeholder='Enter your Email id'/>
        <br>
        </br>
        <label>Password:</label>
        <br />
        <input type="Password" placeholder='Enter your Password' />
    </form>
    <br></br>
    <Link to={'/home'}><button>Login</button></Link>
    
    <Link to={'/'}><button>Back</button></Link>
    <br />
    <Link to={'/'}>Create New Account</Link>
    <br></br>
    </>

  )
}

export default Login