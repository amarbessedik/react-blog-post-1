import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import aboutUsImage from "../../images/img6.jpeg";
import blogData from "../../data/blog";
import { Link, NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const posts = blogData.data;
    setPosts(posts);
  }, []);
  return (
    <div className="sidebar-container">
      <Link to="/about" className="link">
        <Card
          className="card"
          style={{ marginBottom: "10px", border: "1px solid rgba(0,0,0,.2)" }}
        >
          <div className="card-header">
            <span>Profile</span>
          </div>
          <div className="profile-image-container">
            <img src={aboutUsImage} alt="aboutUsImage" />
          </div>
          <div className="card-body">
            <p className="profile-bio">
              My name is Bean H. Potter. I am a Software Developer specializing
              in the MERN Stack ...
            </p>
          </div>
        </Card>
      </Link>
      <Card
        style={{ marginBottom: "10px", border: "1px solid rgba(0,0,0,.2)" }}
      >
        <div className="card-header">
          <span>Social Network</span>
        </div>
      </Card>
      <Card
        style={{ marginBottom: "10px", border: "1px solid rgba(0,0,0,.2)" }}
      >
        <div className="card-header">
          <span>Most Recent Posts</span>
        </div>
        <div className="posts">
          {posts.map((post, index) => {
            return (
              <NavLink key={index} to={`/post/${post.id}`}>
                <div className="recent-posts">
                  <h3>{post.blogTitle}</h3>
                  <img src={post.blogImage} alt="recentImagePost" />
            <p>{post.blogText.substring(0,100)} ...</p>
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
