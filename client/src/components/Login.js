import React from "react";
import "./Styles/SignIn/SignIn.css";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="form-container">
        <div className="login-form">
          <img src={Logo} className="login-logo" alt="InstaLogo" />
          <div>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" name="password" id="password" placeholder="Password" />
          </div>
          <input type="submit" id="login-btn" value="Log In" />
        </div>
        <div className="signUp-form">
          Don't have an account?<Link to="/signUp"><span> Sign Up</span></Link>
        </div>
      </div>
    </div>
  )
}