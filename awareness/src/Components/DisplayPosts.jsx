import React from "react";
import "./DisplayPosts.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../http";
import Posts from "./HomePosts/Posts";
export default function DisplayPosts() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
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
    <div className="displaypost">
      <Posts posts={posts} />
    </div>
  );
}
