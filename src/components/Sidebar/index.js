import React from "react";
import "./style.css";
import Card from "../UI/Card";
import aboutUsImage from "../../images/cestovat-chladny-dno-jednoduchost-2868847.jpg";

const Sidebar = (props) => {
  return (
    <div className="sidebar-container">
      <Card
        style={{ marginBottom: "10px", border: "1px solid rgba(0,0,0,.2)" }}
      >
        <div className="card-header">
          <span>About Us</span>
        </div>
        <div className="profile-image-container">
          <img
            src={aboutUsImage}
            alt="aboutUsImage"
          />
        </div>
      </Card>
      <Card
        style={{ marginBottom: "10px", border: "1px solid rgba(0,0,0,.2)" }}
      >
        <div className="card-header">
          <span>Social Network</span>
        </div>
      </Card>
    </div>
  );   
};

export default Sidebar;
