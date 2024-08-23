import React from "react";
import { RiCloseLine } from "react-icons/ri";
import "./Styles/Modal/Modal.css";
import { useNavigate } from "react-router-dom";

export default function Modal({setModalOpen}) {
    const Navigate = useNavigate();
  return (
    <div className="darkBg" onClick={() => setModalOpen(false)} >
        <div className="center">
            <div className="modal">
                <div className="header">
                    <h5>Confirm!</h5>
                </div>
                <button className="close-btn" onClick={() => setModalOpen(false)} >
                    <RiCloseLine></RiCloseLine>
                </button>
                {/* Content */}
                <div className="content">
                    Are you sure?
                </div>
                <div className="actions">
                    <div className="btns">
                        <button className="logOut-btn" onClick={() => {
                            setModalOpen(false);
                            localStorage.clear();
                            console.log("Logged out successfully!");
                            Navigate("/login");
                        }} >Log Out</button>
                        <button className="cancel-btn" onClick={() => setModalOpen(false)} >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}