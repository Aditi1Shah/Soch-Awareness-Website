import React from "react";
import "./topbar.css";
import logo from "./images/logo.jpg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export default function Topbar() {
  const user = false;
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
  const handlehomeclick = (e) => {
    let path = "/";
    navigate(path);
    e.preventDefault(); // Do some stuffs navigate("/next-page");
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
          <li className="toplisticons">Write</li>
          <li className="toplisticons">Blog</li>
          <li className="toplisticons">Contact Us</li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <img
            src="https://1fid.com/wp-content/uploads/2022/07/girl-profile-pic-14-1024x1024.jpg"
            alt=""
            className="loginimg"
          />
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
