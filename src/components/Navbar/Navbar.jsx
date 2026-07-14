import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo-1.png";
import services from "../../data/services";
import megaMenuAdImage from "../../assets/images/menuad.png";
import { FaChevronDown } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
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
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "services")}
              >
                Services
              </a>
              <FaChevronDown className="dropdown-icon" />

              <div className="services-mega-menu">
                <div className="mega-menu-column">
                  {services.slice(0, 3).map((service, index) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="mega-menu-item"
                      onClick={closeMenu}
                    >
                      <span className="mega-menu-number">{index + 1}</span>
                      <div>
                        <h4>{service.name}</h4>
                        <p>{service.menuDescription}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mega-menu-column">
                  {services.slice(3, 6).map((service, index) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="mega-menu-item"
                      onClick={closeMenu}
                    >
                      <span className="mega-menu-number">{index + 4}</span>
                      <div>
                        <h4>{service.name}</h4>
                        <p>{service.menuDescription}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mega-menu-column mega-menu-promo-column">
                  {services.slice(6, 7).map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="mega-menu-item"
                      onClick={closeMenu}
                    >
                      <span className="mega-menu-number">7</span>
                      <div>
                        <h4>{service.name}</h4>
                        <p>{service.menuDescription}</p>
                      </div>
                    </Link>
                  ))}

                  <div className="mega-menu-ad">
                    <img src={megaMenuAdImage} alt="Telvida solutions" />
                    <h4>Ad main text</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
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

        <a
          href="#contact"
          className="quote-btn"
          onClick={(e) => handleNavClick(e, "contact")}
        >
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
