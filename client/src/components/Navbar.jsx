import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar/Navbar.css";
import Logo from "../img/logo.png";

export const Navbar = ({ login }) => {
    const Login = ()=> {
        const Token = localStorage.getItem("jwt")
        if(login || Token){
            return [
                <>
                    <Link to="/profile">
                        <li>Profile</li>
                    </Link>
                    <Link to="/post">Post</Link>
                </>
            ]
        } else {
            return [
                <>
                    <Link to="/signUp">
                        <li>Sign Up</li>
                    </Link>
                    <Link to="/login">
                        <li>Log In</li>
                    </Link>
                 </>
            ]
        }
        
    }
    
  return (
    <div className='navbar'>
        <img src={Logo} alt="InstaLogo" />
        <ul className="nav-menu">{Login()}</ul>
    </div>
  )
}