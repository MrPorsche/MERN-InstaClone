import React, { useEffect, useState } from "react";
import "./Styles/SignUp/SignUp.css";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
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
      .then(data => {console.log(data);
    })
    
  }

  return (
    <div className="signUp">
      <div className="form-container">
        <div className="signUp-form">
          <img src={Logo} alt="InstaLogo" className="signUpLogo" />
          <p className="signUpPar">Sign up to see photos and videos<br />from your friends.</p>
          <div>
            <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div>
            <input type="text" name="name" id="name" value={name} placeholder="Full Name" onChange={(e) => { setName(e.target.value) }} />
          </div>
          <div>
            <input type="text" name="username" id="username" value={userName} placeholder="Username" onChange={(e) => { setUserName(e.target.value) }} />
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