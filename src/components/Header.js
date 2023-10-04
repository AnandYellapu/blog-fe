import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiGitlabLogoFill } from 'react-icons/pi';
import { AiOutlineLogout } from 'react-icons/ai';

const PostsDropdown = () => {
  return (
    <div className="dropdown">
      <Link to="/create-post">CreatePost</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          {/* Use Link to navigate to home page */}
          <Link to="/">
            <PiGitlabLogoFill className="logo-icon" />
            <span className="logo-title">Mix</span>
          </Link>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
            <div className="nav-link with-dropdown">
              <span>More</span>
              <PostsDropdown />
            </div>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/logout" className="nav-link" onClick={toggleMenu}>
              <AiOutlineLogout />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
