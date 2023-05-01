import React from "react";
import "./home.css";
import Mentalblog from "./Components/HomeSubComponents/Mentalblog";
import Slider from "./ImageSlider/Slider";
import DrugAddiction from "./Components/HomeSubComponents/DrugAddiction";
import TextAnimationPosts from "./TextAnimationPosts";
import WeddingTrauma from "./Components/HomeSubComponents/WeddingTrauma";
import doctor from "./doctorimg.png";
import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "./http";
// import Posts from "./Components/HomePosts/Posts";
export default function Home() {
  // const [posts, setPosts] = useState([]);
  // const { search } = useLocation();
  // console.log("herrrreee");
  // console.log(search);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("/posts" + search);
  //     console.log("in hello");
  //     console.log(res.data);
  //     setPosts(res.data);
  //   };
  //   fetchPosts();
  // }, [search]);
  const navigate = useNavigate();
  const handleaboutclick = (e) => {
    let path = "/aboutus";
    navigate(path);
    e.preventDefault();
  };
  return (
    <div>
      <Slider />
      {/* <Posts posts={posts} /> */}
      <div className="aboutUs">
        <h2 className="about">ABOUT US </h2>
        <img className="imgdoc" src={doctor} alt="" />
      </div>
      <div className="head-text">
        <div>
          <img
            className="head-image"
            src="https://wallpaperaccess.com/full/4357971.jpg"
            alt=""
            onClick={handleaboutclick}
          />
        </div>
        <div class="text-on-image">
          <p>
            Soch is a website that aims to raise awareness about various social
            and environmental issues that affect our lives and our planet. Soch
            means "thought" in Hindi, and we believe that every thought matters.
            We want to inspire people to think critically, creatively and
            compassionately about the world around them and to take action for
            positive change. SOCH provides the users with a way to discern their
            problems along with solutions. Introducing our dear readers to a non
            profitable open platform 'Soch', we're here to show world a new
            perception. Through Soch, people can share their experiences and
            stories by writing their blogs, without submitting any registration
            fee. They'll now not have to seek someone who can perceive their
            problems as they'll find many of them, which will also help them to
            finally express their emotions without a doubt of being accepted.
          </p>
        </div>
      </div>

      <div className="postsheading">
        <TextAnimationPosts />
      </div>
      <div className="peopleposts">
        <Mentalblog />
        <DrugAddiction />
        <WeddingTrauma />
      </div>
    </div>
  );
}
