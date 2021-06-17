import React from "react";
import Card from "../UI/Card";
import "./style.css";
import Toby1 from "../../assets/blog/Toby1.JPG";

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">Beautiful is always beautiful</h1>
          <span className="postedBy">Priya Macpherson ⋅ 06.16.21</span>
        </div>
        <div className="postImageContainer">
          <img src={Toby1} />
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
