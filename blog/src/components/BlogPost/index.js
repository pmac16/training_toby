import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import "./style.css";
import Toby1 from "../../assets/blog/Toby1.JPG";
import blogPost from "../../data/blog.json";
import Post from "../../containers/Post";

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  const [post, setPost] = useState({}); //will be called after any render, accepts a callback
  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find((post) => post.id == postId);
    setPost(post);
    console.log(blogPost);
  }, post); //only update if post is changed

  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">Priya Macpherson ⋅ 06.16.21</span>
        </div>
        <div className="postImageContainer">
          <img src={Toby1} />
        </div>
        <div className="postContent">
          <h3>Post Title</h3>
          <p> lorem ipsum</p>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
