import React, { useEffect } from "react";
import "./Styles/SignUp/SignUp.css";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  const fetchData = async () => {
    const Response = await fetch("http://localhost:5000/users");
    const Data = await Response.json();
    console.log(Data);
    
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="signUp">
      <div className="form-container">
        <div className="signUp-form">
          <img src={Logo} alt="InstaLogo" className="signUpLogo" />
          <p className="signUpPar">Sign up to see photos and videos<br />from your friends.</p>
          <div>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div>
            <input type="text" name="name" id="name" placeholder="Full Name" />
          </div>
          <div>
            <input type="text" name="username" id="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" id="password" placeholder="Password" />
          </div>
          <p className="signUpPar" style={{ fontSize: "12px", margin: "3px 0" }}>By signing up, you agree to our Terms,<br />Privacy Policy and Cookies Policy.</p>
          <input type="submit" id="signUp-btn" value="Sign Up" />
        </div>
        <div className="login-form">
          Already have an account?<Link to="/login"><span> Log In</span></Link> 
        </div>
      </div>
    </div>
  )
}