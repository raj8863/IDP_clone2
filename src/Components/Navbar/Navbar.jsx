import React, { useState, useEffect } from "react";
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

    // Cleanup function to reset overflow when component unmounts
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
            <a href="./pages/New.jsx">News and articles</a>
          </li>
          <li className="black-li">
            <a href="./pages/Events.jsx">Events</a>
          </li>
          <li className="black-li1">
            <a href="./pages/Find.jsx">
              Find us <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </li>
          <li className="black-li1">
            <a href="./pages/English.jsx">
              <FontAwesomeIcon icon={faGlobe} /> English
            </a>
          </li>
        </ul>
      </div>

      {/* Main Navigation */}
      <nav className="main-navbar">
        <a href="/">
          <img src="/assets/idp-logo.svg" alt="Logo" className="logo" />
        </a>



        <ul className={`nav-links ${isMobileMenuOpen ? "nav-links-open" : ""}`}>
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Study abroad steps</a></li>
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Study destinations</a></li>
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Find a course</a></li>
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>IELTS</a></li>
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Student Essentials</a></li>

          <li className="nav-buttons">
            <button className="login-btn">Avail Free counselling</button>
            <button className="signup-btn">Sign in</button>
          </li>
        </ul>
        {/* Right-side icons (mobile & desktop) */}
        <div className="right-icons">
          {/* Heart icon */}
          <a href="#" className="icon-btn heart">
            <FontAwesomeIcon icon={faRegularHeart} />
          </a>

          {/* Account icon */}
          <a href="#" className="icon-btn account" >
            <FontAwesomeIcon icon={faUser} />
          </a>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn " onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
