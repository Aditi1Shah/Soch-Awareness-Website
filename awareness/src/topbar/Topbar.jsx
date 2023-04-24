import React, { useContext } from "react";
import "./topbar.css";
import logo from "./images/logo.jpg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  //const user = false;
  const navigate = useNavigate();
  const handleRegisterClick = (e) => {
    let path = "/register";
    navigate(path);
    e.preventDefault();
  };
  const handleLoginClick = (e) => {
    let path = "/login";
    navigate(path);
    e.preventDefault();
  };
  const handleWriteClick = (e) => {
    let path = "/write";
    navigate(path);
    e.preventDefault();
  };
  const handlehomeclick = (e) => {
    let path = "/";
    navigate(path);
    e.preventDefault(); // Do some stuffs navigate("/next-page");
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const handlePostsClick = (e) => {
    let path = "/displaypost";
    navigate(path);
    e.preventDefault();
  };
  return (
    <div className="top">
      <div className="topleft">
        <img className="topimg" src={logo} alt="logo" />
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplisticons" onClick={handlehomeclick}>
            Home
          </li>
          <li className="toplisticons">What We Do</li>
          <li className="toplisticons">About Us</li>
          <li className="toplisticons" onClick={handleWriteClick}>
            Write
          </li>
          <li className="toplisticons" onClick={handlePostsClick}>
            People's Blogs
          </li>
          <li className="toplisticons">Contact Us</li>
          <li className="toplisticons" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <img src={user.profilePic} alt="" className="loginimg" />
        ) : (
          <>
            <Button
              style={{
                backgroundColor: "#dfc3da",
                color: "#a7374b",
                height: "50px",
                width: "120px",
                margin: "0px 23px 0px 0px",
              }}
              className="toprgtbutton"
              variant="contained"
              onClick={handleRegisterClick}
            >
              REGISTER
            </Button>
            <Button
              style={{
                backgroundColor: "#dfc3da",
                color: "#a7374b",
                height: "50px",
                width: "120px",
              }}
              className="toprgtbutton"
              variant="contained"
              onClick={handleLoginClick}
            >
              LOGIN
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
