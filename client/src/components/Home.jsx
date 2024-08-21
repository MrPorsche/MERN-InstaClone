import React, { useEffect, useState } from "react";
import "./Styles/Home/Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const Token = localStorage.getItem("jwt")
    if(!Token){
      Navigate("/signUp");
    }

    // fetching feed
    fetch("http://localhost:5000/feed", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
    }).then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.log(err))
    
  }, [])
  
  return (
    <div className="home">
      {/* Card */}
      {data.map((posts) => {
        return (
          <div className="card">
            {/* Header */}
            <div className="profile-pic">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="profile-pic" />
              <h5>{posts.postedBy.name}</h5>
            </div>
            {/* post */}
            <div className="post">
              <img
                src={posts.picture}
                alt="post-media" />
            </div>
            {/* Content */}
            <div className="content">
              <span className="material-symbols-outlined">favorite</span>
              <p>10 Likes</p>
              <p>{posts.body}</p>
            </div>
            {/* Comments */}
            <div className="comments">
              <span className="material-symbols-outlined">mood</span>
              <input type="text" placeholder="Add a comment" />
              <button className="comment-btn">Post</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}