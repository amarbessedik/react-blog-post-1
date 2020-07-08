import React from 'react';
import './style.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="header-menu">
                <a href="home">Home</a>
                <a href="about">About</a>
                <a href="contact">Contact Us</a>
            </nav>
            <div>
                social media links
            </div>
        </header>
    );
}

export default Header;
