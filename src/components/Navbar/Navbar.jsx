import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo-1.png";
import { FaChevronDown } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About Us", path: "#about" },
  { name: "Services", path: "#services", hasDropdown: true },
  { name: "Products", path: "#products" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="nav-container">
        <a href="#home" className="logo">
          <img src={logo} alt="Telvida Technologies" />
        </a>

        <nav className="nav-menu">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a href={link.path}>{link.name}</a>

                {link.hasDropdown && (
                  <FaChevronDown className="dropdown-icon" />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="quote-btn">
          Request a Quote
        </a>

        <button
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile slide-in menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <a href="#home" className="logo" onClick={closeMenu}>
            <img src={logo} alt="Telvida Technologies" />
          </a>
          <button
            className="close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name} className="mobile-nav-item">
              <a href={link.path} onClick={closeMenu}>
                {link.name}
              </a>

              {link.hasDropdown && <FaChevronDown className="dropdown-icon" />}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="quote-btn mobile-quote-btn"
          onClick={closeMenu}
        >
          Request a Quote
        </a>
      </div>
    </header>
  );
};

export default Navbar;
