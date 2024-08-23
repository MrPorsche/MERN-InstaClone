import React, { useEffect, useState } from "react";
import Picture from "../img/profile.png";
import "./Styles/Post/Post.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Post() {
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const Navigate = useNavigate();

    // Toast Functions
    const notifyError = (msg) => toast.error(msg);
    const notifySuccess = (msg) => toast.success(msg);

    useEffect(() => {
      //   parsing post to mongoDB

      if(url){
        fetch("http://localhost:5000/post", {
            method: "post",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt"),
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                body,
                picture:url
            })
            }).then(res => res.json())
            .then(Data => {if(Data.err){
                notifyError(Data.err)
            } else{
                notifySuccess("Post created successfully!")
                Navigate("/");
            }})
            .catch(err => console.log(err))
      }
    }, [url])
    

    // posting images to Cloudinary
    const postInfo = () => {
        console.log(body, image);
        const Data = new FormData();
        Data.append("file", image);
        Data.append("upload_preset", "InstaClone");
        Data.append("cloud_name", "porschecloud");

        fetch(
            "https://api.cloudinary.com/v1_1/porschecloud/image/upload", {
                method: "post",
                body: Data
        }).then(res => res.json())
          .then(Data => setUrl(Data.url))
          .catch(err => console.log(err))
    }

    const File = (e) => {
        var output = document.getElementById("output");
        output.src = URL.createObjectURL(e.target.files[0]);
        output.onload = function (params) {
            URL.revokeObjectURL(output.src) // Free Memory
        };
    }
  return (
    <div className="post">
        <div className="header">
            <h4>Create a New Post</h4>
            <button id="post-btn" onClick={() => { postInfo() }}>Share</button>
        </div>
        <div className="content">
            <img id="output"
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png" />
            <input onChange={(e) => {
                File(e);
                setImage(e.target.files[0])
            }} type="file" accept="image/*" />
        </div>
        <div className="details">
            <div className="profile-frame">
                <div className="profile-pic">
                    <img src={Picture}
                        alt="profile-picture" />
                </div>
                <h5>İㄴÿДЩ ШДÿÿЭĎ</h5>
            </div>
            <textarea value={body} onChange={(e) => {
                setBody(e.target.value)
            }} type="text" placeholder="caption" ></textarea>
        </div>
    </div>
  )
}
