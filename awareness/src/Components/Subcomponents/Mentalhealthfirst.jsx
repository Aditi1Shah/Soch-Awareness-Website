import "./Mentalhealthfirst.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Mentalhealthfirst() {
  const navigate = useNavigate();
  const handleimgfirstclick = (e) => {
    let path = "/happylife";
    navigate(path);
    e.preventDefault();
  };
  return (
    <div className="post">
      <img
        src="https://mtltimes.ca/wp-content/uploads/2022/06/happy-life.jpg"
        alt=""
        className="photo"
        onClick={handleimgfirstclick}
      />

      <div className="postinfo">
        <span className="posttitle">5 ways to Live a happy Life </span>
        <p className="postDesc">
          Simple changes in lifestyle can bring a ton of changes. Read on to get
          quick steps to take to lead a happy and healthy life
        </p>
      </div>
    </div>
  );
}
