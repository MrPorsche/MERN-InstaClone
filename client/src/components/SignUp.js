import React, { useEffect, useState } from "react";
import "./Styles/SignUp/SignUp.css";
import Logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ToastFun
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const signUp = () => {
    
    // Email Validation
    if(!emailRegex.test(email)){
      notifyError("Invalid email!")
      return
    } else if(!passRegex.test(password)){
      notifyError("Password must contains at least 8 characters, including at least 1 lowercase char, 1 uppercase char, 1 number and 1 special letter!")
      return
    }

    // fetching signUp info into database
    fetch("http://localhost:5000/signUp", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        userName: userName,
        email: email,
        password: password
      })
    }).then(res => res.json())
      .then(data => {
        if(data.err){
          notifyError(data.err);
        } else{
          notifySuccess(data.message);
          Navigate("/login");
        }
        console.log(data);
    });
  }

  return (
    <div className="signUp">
      <div className="form-container">
        <div className="signUp-form">
          <img src={Logo} alt="InstaLogo" className="signUpLogo" />
          <p className="signUpPar">Sign up to see photos and videos<br />from your friends.</p>
          <div>
            <input type="text" name="name" id="name" value={name} placeholder="Full Name" onChange={(e) => { setName(e.target.value) }} />
          </div>
          <div>
            <input type="text" name="username" id="username" value={userName} placeholder="Username" onChange={(e) => { setUserName(e.target.value) }} />
          </div>
          <div>
            <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div>
            <input type="password" name="password" id="password" value={password} placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <p className="signUpPar" style={{ fontSize: "12px", margin: "3px 0" }}>By signing up, you agree to our Terms,<br />Privacy Policy and Cookies Policy.</p>
          <input type="submit" id="signUp-btn" value="Sign Up" onClick={() => {signUp()}} />
        </div>
        <div className="login-form">
          Already have an account?<Link to="/login"><span> Log In</span></Link> 
        </div>
      </div>
    </div>
  )
}