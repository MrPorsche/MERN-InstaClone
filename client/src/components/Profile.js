import React, { useEffect, useState } from "react";
import Picture from "../img/profile.png";
import "./Styles/Profile/Profile.css";

export default function Profile() {
  const [picture, setPicture] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/myposts", {
      headers:{
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(res => res.json())
      .then((result) => {
        setPicture(result)
        console.log(picture);
        
      })

  }, [])
  
  return (
    <div className="profile">
      {/* Profile Frame */}
      <div className="profile-frame">
        <div className="profile-pic">
          <img src={Picture}
            alt="profile-pic"
            className="profile-pic" />
        </div>
        {/* Profile Data */}
        <div className="profile-data">
          <h1>İㄴÿДЩ ШДÿÿЭĎ</h1>
          <div className="profile-info">
            <p>10 posts</p>
            <p>15 followers</p>
            <p>20 following</p>
          </div>
        </div>
      </div>
      <hr />
      {/* Gallery */}
      <div className="gallery">
        {picture.map((pictures) => {
          return <img key={pictures._id} src={pictures.picture} className="item" />
        })}
      </div>
    </div>
  )
}