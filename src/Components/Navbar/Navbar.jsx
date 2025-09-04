import React from "react";
import "./Navbar.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons"; // Hollow heart

const Navbar = () => {
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

        <ul className="nav-links">
          <li><a href="#">Study abroad steps</a></li>
          <li><a href="#">Study destinations</a></li>
          <li><a href="#">Find a course</a></li>
          <li><a href="#">IELTS</a></li>
          <li><a href="#">Student Essentials</a></li>

          <li className="nav-buttons">
            <button className="login-btn">Avail Free counselling</button>
            <button className="signup-btn">Sign in</button>
          </li>

          <li className="heart">
            <a href="#">
              <FontAwesomeIcon icon={faRegularHeart} /> {/* Hollow heart */}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
