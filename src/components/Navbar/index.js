import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import './style.css';
import Logo from "../../assets/icons/search_icon.png";

const Navbar = (props) => {
    const [search, setSearch] = useState(false);
    //search submit handler
    const handleSubmit = (e) =>{
     e.preventDefault();
     alert('SEARCHED');
    }

    const openSearch = (e) =>{
        search ? setSearch(false) : setSearch(true);
    }

    const searchClass = !search ? 'search-input': 'search-input active';

    return (
      <div className="navbar">
        <ul className="navbar-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/post/1">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
        <div className="search-bar">
          <form className="form" onSubmit={handleSubmit}>
            <input className={searchClass} type="text" placeholder="Search ..." />
            <img 
              onMouseDown={openSearch}
              className="search-icon"
              src={Logo}
              alt="search_icon"
            />
          </form>
        </div>
      </div>
    );
}

export default Navbar;
