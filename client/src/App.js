import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.js";
import Home from "./components/Home.js";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";
import Profile from "./components/Profile.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Post from "./components/Post.js";
import { LoginContext } from "./context/LoginContext.js";
import Modal from "./components/Modal.js";

function App() {
  const [userLogin, setUserLogin] = useState("");
  const [modalOpen, setModalOpen] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <LoginContext.Provider value={{ setUserLogin, setModalOpen }}>
          <Navbar login={ userLogin } />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/post" element={<Post />}></Route>
          </Routes>
          <ToastContainer theme="dark" />
          {modalOpen && <Modal setModalOpen={setModalOpen} /> }
        </LoginContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
