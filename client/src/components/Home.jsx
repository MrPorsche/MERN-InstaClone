import React from "react";
import "./Styles/Home/Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Card */}
      <div className="card">
        {/* Header */}
        <div className="profile-pic">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="profile-pic" />
          <h5>ILyas</h5>
        </div>
        {/* post */}
        <div className="posts">
          <img
            src="https://plus.unsplash.com/premium_photo-1723651236737-6b51506acc99?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="post-media" />
        </div>
        {/* Content */}
        <div className="content">
          <span className="material-symbols-outlined">favorite</span>
          <p>10 Likes</p>
          <p>Hanging out with friendz</p>
        </div>
        {/* Comments */}
        <div className="comments">
          <span className="material-symbols-outlined">mood</span>
          <input type="text" placeholder="Add a comment" />
          <button className="comment-btn">Post</button>
        </div>
      </div>
    </div>
  )
}