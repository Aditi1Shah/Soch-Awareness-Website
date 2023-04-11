import React from "react";
import "./Mentalhealthsecond.css";
import { useNavigate } from "react-router-dom";
export default function Mentalhealthsecond() {
  const navigate = useNavigate();
  const handleimgscndclick = (e) => {
    let path = "/meditation";
    navigate(path);
    e.preventDefault();
  };
  return (
    <div className="post">
      <img
        src="https://chopra.brightspotcdn.com/ba/5b/a4e607054e908c357b72c88d4102/7fbroqcg.jpeg"
        alt=""
        className="photo"
        onClick={handleimgscndclick}
      />
      <div className="postinfo">
        <span className="posttitle">The Power of Meditation </span>
        <p className="postDesc">
          Brilliant things happen in calm minds. Meditation is not about having
          yet another new strategy of self-help plan, but rather providing a
          framework in which to see yourself more clearly
        </p>
      </div>
    </div>
  );
}
