import "./Mentalhealththird.css";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Mentalhealththird() {
  const navigate = useNavigate();
  const handleclick = (e) => {
    let path = "/gitapage";
    navigate(path);
    e.preventDefault();
  };
  return (
    <div className="postMental">
      <img
        src="https://lirp.cdn-website.com/b6eb0798/dms3rep/multi/opt/Logo-1920w.png"
        alt=""
        className="photo"
        onClick={handleclick}
      />
      <div className="postinfoMental">
        <span className="posttitleMental">Mind Healing and counselling</span>
        <p className="postDescMental">
          Bhagavad Gita has a solution for every problem. There are numerous
          shlokas for every kind of mental stress and problem.
        </p>
      </div>
    </div>
  );
}
