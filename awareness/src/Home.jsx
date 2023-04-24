import React from "react";
import "./home.css";
import Mentalblog from "./Components/HomeSubComponents/Mentalblog";
import Slider from "./ImageSlider/Slider";
import DrugAddiction from "./Components/HomeSubComponents/DrugAddiction";

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
  return (
    <div>
      <Slider />
      {/* <Posts posts={posts} /> */}
      <div className="peopleposts">
        <Mentalblog />
        <DrugAddiction />
      </div>
    </div>
  );
}
