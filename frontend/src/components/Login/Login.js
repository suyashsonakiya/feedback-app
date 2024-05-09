import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email:"",
    password:""
})

const handleChange = e => {
    const {name, value} = e.target
    setUser({
        ...user,
        [name]:value
    })
}

  const login = () =>{
    axios.post("http://localhost:4000/login",user)
    .then(res => alert(res.data.message))
  }

  return (
    <div className="container">
    <div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="email" value={user.email} onChange={handleChange} required=""/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password"name="password" value={user.password} onChange={handleChange} required=""/>
      <label>Password</label>
    </div>
    <div className="glow-on-hover" onClick={login}>Login</div>
    <div style={{marginLeft:"40px", color:"white"}}>or</div>
    <div className="glow-on-hover" onClick={() => navigate('/register')}>Register</div>
  </form>
</div>
</div>
  )
}

export default Login






