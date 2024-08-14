import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar/Navbar.css";
import Logo from "../img/logo.png";

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="InstaLogo" />
        <ul className="nav-menu">
            <Link to="signUp">
                <li>Sign Up</li>
            </Link>
            <Link to="login">
                <li>Log In</li>
            </Link>
            <Link to="profile">
                <li>Profile</li>
            </Link>
        </ul>
    </div>
  )
}