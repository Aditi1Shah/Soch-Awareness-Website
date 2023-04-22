import React from "react";
import Mentalblog from "./Components/HomeSubComponents/Mentalblog";
import Slider from "./ImageSlider/Slider";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "./http";
import Posts from "./Components/HomePosts/Posts";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  console.log("herrrreee");
  console.log(search);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      console.log("in hello");
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div>
      <Slider />
      <Posts posts={posts} />
      <Mentalblog />
    </div>
  );
}
