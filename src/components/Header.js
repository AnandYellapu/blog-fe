
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiGitlabLogoFill } from 'react-icons/pi';
import { AiOutlineLogout } from 'react-icons/ai'; // Import the power-off icon

// New Dropdown Component
const PostsDropdown = () => {
  // Add your dropdown content and logic here
  return (
    <div className="dropdown">
      <Link to="/create-post">CreatePost</Link>
      <Link to="/login">Login</Link>
      {/* Add more dropdown items as needed */}
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
          <PiGitlabLogoFill className="logo-icon" />
          <span className="logo-title">Mix</span>
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
              {/* Add the Posts NavLink with the dropdown component */}
              <span>More</span>
              <PostsDropdown />
            </div>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/logout" className="nav-link" onClick={toggleMenu}>
              <AiOutlineLogout /> {/* Replace with your preferred logout icon */}
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
