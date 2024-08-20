import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Post from "./components/Post.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/post" element={<Post />}></Route>
        </Routes>
        <ToastContainer theme="dark" />
      </div>
    </BrowserRouter>
  );
}

export default App;
