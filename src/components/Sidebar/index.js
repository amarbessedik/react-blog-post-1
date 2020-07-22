import React from "react";
import "./style.css";
import Card from "../UI/Card";
import aboutUsImage from "../../images/profile-picture.jpeg";
import recentPostsData from './RecentPostsData'
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sidebar-container">
      <Link to="/about" className="link">
        <Card
          className="card"
          style={{ marginBottom: "10px", border: "1px solid rgba(0,0,0,.2)" }}
        >
          <div className="card-header">
            <span>About Us</span>
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
          <span>Recent Posts</span>
        </div>
        <div className="posts">
          {recentPostsData.map((post, index) => {
            return (
              <div className="recent-posts" key={index}>
              <Link to='/posts'>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
              </Link>
                  <span>{post.date}</span>
            <span>Pulished {post.date}</span>
                </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
