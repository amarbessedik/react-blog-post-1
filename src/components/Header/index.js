import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="header-menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <div>
                social media links
            </div>
        </header>
    );
}

export default Header;
