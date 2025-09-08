import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faAngleDown, faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons"; // Hollow heart

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Black Bar */}
      <div className="black-container">
        <ul className="black-links">
          <li className="black-li">
            <Link to="/pages/Events">News and articles</Link>
          </li>
          <li className="black-li">
            <Link to="/pages/Events">Events</Link>
          </li>
          <li className="black-li1">
            <Link to="/pages/Find">
              Find us <FontAwesomeIcon icon={faAngleDown} />
            </Link>
          </li>
          <li className="black-li1">
            <Link to="/pages/English">
              <FontAwesomeIcon icon={faGlobe} /> English
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Navigation */}
      <nav className="main-navbar">
        {/* Logo */}
        <Link to="/">
          <img src="/assets/idp-logo.svg" alt="Logo" className="logo" />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="#" onClick={() => setIsMobileMenuOpen(false)}>Study abroad steps</Link>
          </li>
          <li>
            <Link to="#" onClick={() => setIsMobileMenuOpen(false)}>Study destinations</Link>
          </li>
          <li>
            <Link to="#" onClick={() => setIsMobileMenuOpen(false)}>Find a course</Link>
          </li>
          <li>
            <Link to="#" onClick={() => setIsMobileMenuOpen(false)}>IELTS</Link>
          </li>
          <li>
            <Link to="#" onClick={() => setIsMobileMenuOpen(false)}>Student Essentials</Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="nav-buttons">
          <button className="login-btn">Avail Free counselling</button>
          <button className="signup-btn">Sign in</button>
        </div>

        {/* Right-side icons (mobile & desktop) */}
        <div className="right-icons">
          <Link to="#" className="icon-btn heart">
            <FontAwesomeIcon icon={faRegularHeart} />
          </Link>
          <Link to="#" className="icon-btn account">
            <FontAwesomeIcon icon={faUser} />
          </Link>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Menu Sidebar */}
        <div className={`mobile-sidebar ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-links">
            <li>
              <Link to="#" onClick={toggleMobileMenu}>Study abroad steps</Link>
            </li>
            <li>
              <Link to="#" onClick={toggleMobileMenu}>Study destinations</Link>
            </li>
            <li>
              <Link to="#" onClick={toggleMobileMenu}>Find a course</Link>
            </li>
            <li>
              <Link to="#" onClick={toggleMobileMenu}>IELTS</Link>
            </li>
            <li>
              <Link to="#" onClick={toggleMobileMenu}>Student Essentials</Link>
            </li>
            <li>
              <button className="login-btn" onClick={toggleMobileMenu}>Avail Free counselling</button>
            </li>
            <li>
              <button className="signup-btn" onClick={toggleMobileMenu}>Sign in</button>
            </li>
          </ul>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={toggleMobileMenu}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
