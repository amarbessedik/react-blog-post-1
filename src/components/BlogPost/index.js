/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './style.css';
import Card from '../UI/Card';
import postImage from "../../images/memories-from.jpg";

const BlogPost = (props) => {
    return (
      <div className="blog-post-container">
        <Card>
          <div className="blog-header">
            <span className="blog-category">Featured</span>
            <h1 className="post-title">Beautiful is always beautiful</h1>
            <span className="posted-by">
              Posted on Jully 9, 2020 by Sara Blogging Tips
            </span>
          </div>
          {/* image */}
          <div className="post-image-container">
            <img
              src={postImage}
              alt="postImage"
            />
          </div>
        </Card>
      </div>
    );
}

export default BlogPost;
