import React from 'react';
import './style.css';

const Navbar = (props) => {
    return (
        <div className="navbar">
          <ul className="navbar-menu">
              <li><a href="link">Home</a></li>
              <li><a href="link">Posts</a></li>
              <li><a href="link">About</a></li>
              <li><a href="link">Contact</a></li>
          </ul>
        </div>
    );
}

export default Navbar;
