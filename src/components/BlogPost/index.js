/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import blogData from "../../data/blog";

const BlogPost = (props) => {
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState('');

  useEffect(() => {
    const id = parseInt(props.match.params.postId);
    const post = blogData.data.find((post) => post.id === id);
    setPost(post);
    setPostId(postId);
  }, [post, postId, props.match.params.id, props.match.params.postId]);

  return (
    <div className="blog-post-container">
      <Card>
        <div className="blog-header">
          <span className="blog-category">{post.blogCategory}</span>
          <h1 className="post-title">{post.blogTitle}</h1>
          <span className="posted-by">
            Posted on {post.postedOn} by {post.author} Blogging Tips
          </span>
        </div>
        {/* image */}
        <div className="post-image-container">
          <img src={post.blogImage} alt="postImage" />
        </div>
        <div className='post-content'>
  <p>{post.blogText}</p>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
