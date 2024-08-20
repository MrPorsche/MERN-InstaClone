import React, { useState } from "react";
import "./Styles/SignIn/SignIn.css";
import Logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ToastFun
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const Login = () => {
    
    // Email Validation
    if(!emailRegex.test(email)){
      notifyError("Invalid email!")
      return
    }

    // fetching signUp info into database
    fetch("http://localhost:5000/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(res => res.json())
      .then(data => {
        if(data.err){
          notifyError(data.err);
        } else{
          notifySuccess(data.msg);
          localStorage.setItem("jwt", data);
          console.log(data);
          
          Navigate("/");
        }
        console.log(data);
    });
  }

  return (
    <div className="login">
      <div className="form-container">
        <div className="login-form">
          <img src={Logo} className="login-logo" alt="InstaLogo" />
          <div>
            <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div>
          <input type="password" name="password" id="password" value={password} placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <input type="submit" id="login-btn" value="Log In" onClick={ () => { Login() } } />
        </div>
        <div className="signUp-form">
          Don't have an account?<Link to="/signUp"><span> Sign Up</span></Link>
        </div>
      </div>
    </div>
  )
}