import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("http://localhost:4000/register", user)
        .then((res) => console.log(res), alert('Register successful'));
        
    } else {
      alert("invalid input");
    }
  };

  return (
    // Added the tailwind css classes

    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <div className="bg-[#141e30] mt-10 overflow-x-hidden container">
          <div class="login-box relative mt-28 sm:mt-32 overflow-x-hidden mx-auto sm:mx-2 ">
            <h2 className="text-center font-bold text-3xl sm:text-4xl">
              Register
            </h2>
            <form>
              <div class="user-box">
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="p-2"
                  required=""
                />
                <label>Your Name</label>
              </div>
              <div class="user-box">
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required=""
                />
                <label>Your Email</label>
              </div>
              <div class="user-box">
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required=""
                />
                <label>Password</label>
              </div>
              <div class="user-box">
                <input
                  type="password"
                  name="reEnterPassword"
                  value={user.reEnterPassword}
                  onChange={handleChange}
                  required=""
                />
                <label>Re-enter Password</label>
              </div>
              <div className="flex justify-around items-center">
                <div className="glow-on-hover" onClick={register}>
                  Register
                </div>
                <div style={{ marginLeft: "40px", color: "white" }}>or</div>
                <div
                  className="glow-on-hover"
                  onClick={() => navigate("/login")}
                >
                  Login
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
