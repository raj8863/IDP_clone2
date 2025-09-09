import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGlobe,  faAngleDown,  faBars,  faTimes,  faUser ,} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";



 const styles = {
  navButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize:"inherit",
    color: "inherit",
    display: "flex",
    alignItems: "center",
    gap: "3px",
  },
  dropdownMenu: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0 4px 8px rgba(18, 2, 2, 0.1)",
    listStyle: "none",
    padding: "10px 0",
    marginTop: "5px",
    borderRadius: "4px",
    zIndex: 1000,
    minWidth: 200,
  },
  dropdownItem: {
    padding: "8px 20px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  navItem: {
    cursor: "pointer",
    position: "relative",
  },
};


const dropdownData = {
  "Study-abroad-steps": [
    "Why study abroad?",
    "Where and what to study?",
    "How do I apply?",
    "After receiving an offer",
    "Prepare to depart",
    "Arrive and thrive",
  ],
  "Study-destinations": [
    "Study in Australia",
    "Study in Canada",
    "Study in Ireland",
    "Study in UK",
    "Study in USA",
  ],
  "Find-a-course": [
    "Undergraduate",
    "Postgraduate",
    "Diploma",
    "Certificate",
    "Short Courses",
  ],
  IELTS: [
    "IELTS Academic",
    "IELTS General Training",
    "IELTS Preparation",
    "Test Dates",
  ],
  "Student-essentials": [
    "Accommodation",
    "Health Insurance",
    "Student Visa",
    "Travel Tips",
  ],
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // store key of open dropdown

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    closeDropdown();
  };

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
          {Object.entries(dropdownData).map(([key, items]) => (
            <li
              key={key}
              style={styles.navItem}
              onMouseEnter={() => setOpenDropdown(key)}
              onMouseLeave={closeDropdown}
            >
              <button
                style={styles.navButton}
                onClick={() => toggleDropdown(key)}
                aria-haspopup="true"
                aria-expanded={openDropdown === key}
              >
                {key
                  .split("-")
                  .map((w) => w[0].toUpperCase() + w.slice(1))
                  .join(" ")}{" "}
                <FontAwesomeIcon icon={faAngleDown} />
              </button>

              {openDropdown === key && (
                <ul style={styles.dropdownMenu}>
                  {items.map((item, idx) => (
                    <li key={idx} style={styles.dropdownItem}>
                      <Link to="#" onClick={closeDropdown} style={{ color: "#333", textDecoration: "none" }}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
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
            <FontAwesomeIcon icon={faUser } />
          </Link>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Menu Sidebar */}
        <div className={`mobile-sidebar ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-links">
            {Object.entries(dropdownData).map(([key, items]) => (
              <li key={key}>
                <Link to="#" onClick={toggleMobileMenu}>
                  {key
                    .split("-")
                    .map((w) => w[0].toUpperCase() + w.slice(1))
                    .join(" ")}
                </Link>
              </li>
            ))}
            <li>
              <button className="login-btn" onClick={toggleMobileMenu}>
                Avail Free counselling
              </button>
            </li>
            <li>
              <button className="signup-btn" onClick={toggleMobileMenu}>
                Sign in
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
