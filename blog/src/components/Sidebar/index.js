import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import "./style.css";
import About from "../../assets/blog/About.JPG";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Sidebar
 **/

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]); //will be called after any render, accepts a callback
  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, posts); //only update if post is changed

  return (
    <div className="sidebarContainer">
      <Card
        style={{
          padding: "10px",
          boxSizing: "border-box",
          backgroundColor: "#00263e",
          marginBottom: "20px",
        }}
      >
        <div className="cardHeader">
          <span>ABOUT US</span>
        </div>
        <div className="aboutImageContainer">
          <img src={About} />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            Hi, I'm Priya! This is Toby. He is an Australian Cattle Dog mix.
            When we rescued him, we had no idea what lay ahead!
          </p>
        </div>
      </Card>
      <Card
        style={{
          padding: "10px",
          boxSizing: "border-box",
          backgroundColor: "#00263e",
          marginBottom: "20px",
        }}
      >
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>

      <Card
        style={{
          padding: "10px",
          boxSizing: "border-box",
          backgroundColor: "#00263e",
          marginBottom: "20px",
        }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>
        <div className="recentPosts">
          {posts.map((post) => {
            return (
              <NavLink to={`/post/${post.id}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
