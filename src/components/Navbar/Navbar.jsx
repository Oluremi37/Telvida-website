import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/brand-logo.png";
import services from "../../data/services";
import ServicesMegaMenu from "../ServicesMegaMenu/ServicesMegaMenu";
import { FaChevronDown } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const timeoutRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const openServicesMenu = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsServicesOpen(true);
  };

  const closeServicesMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsServicesOpen(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    closeMenu();

    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", {
        state: {
          scrollTo: sectionId,
        },
      });
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const timer = setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <header className="header">
      <div className="nav-container">
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleNavClick(e, "home")}
        >
          <img src={logo} alt="Telvida Technologies" />
        </a>

        <nav className="nav-menu">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
                About Us
              </a>
            </li>

            <li className="nav-item nav-item-dropdown">
              <div
                className="services-dropdown-wrapper"
                onMouseEnter={openServicesMenu}
                onMouseLeave={closeServicesMenu}
              >
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                >
                  Services
                </a>

                <FaChevronDown className="dropdown-icon" />

                {isServicesOpen && <ServicesMegaMenu onLinkClick={closeMenu} />}
              </div>
            </li>

            <li className="nav-item">
              <a
                href="#products"
                onClick={(e) => handleNavClick(e, "products")}
              >
                Products
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <Link to="/request-quote" className="quote-btn">
          Request a Quote
        </Link>

        <button
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
      </div>

      <div
        className={`mobile-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <a
            href="#home"
            className="logo"
            onClick={(e) => handleNavClick(e, "home")}
          >
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
          <li className="mobile-nav-item">
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
              Home
            </a>
          </li>

          <li className="mobile-nav-item">
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              About Us
            </a>
          </li>

          <li className="mobile-nav-item mobile-nav-item-dropdown">
            <button
              className="mobile-services-toggle"
              onClick={() => setIsMobileServicesOpen((prev) => !prev)}
            >
              Services
              <FaChevronDown
                className={`dropdown-icon ${
                  isMobileServicesOpen ? "rotated" : ""
                }`}
              />
            </button>

            {isMobileServicesOpen && (
              <div className="mobile-services-list">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    onClick={closeMenu}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li className="mobile-nav-item">
            <a href="#products" onClick={(e) => handleNavClick(e, "products")}>
              Products
            </a>
          </li>

          <li className="mobile-nav-item">
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="quote-btn mobile-quote-btn"
          onClick={(e) => handleNavClick(e, "contact")}
        >
          Request a Quote
        </a>
      </div>
    </header>
  );
};

export default Navbar;
