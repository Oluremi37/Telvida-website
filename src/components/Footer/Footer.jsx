import "./Footer.css";
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-about">
            <p>
              We bridge the gap between complex infrastructure requirements and
              seamless business operations.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="#" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>
            <div className="footer-links-grid">
              <a href="#home">Home</a>
              <a href="#products">Products</a>
              <a href="#about">About Us</a>
              <a href="#contact-us">Contact</a>
              <a href="#services">Services</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Contact us</h4>
            <p className="footer-phone">+234 813 380 9668</p>
            <p className="footer-phone">+234 808 125 0063</p>
          </div>
        </div>

        <div className="footer-divider" />

        <p className="footer-copyright">
          © 2026 Copyright, All Rights Reserved, Telvida Technologies Limited
        </p>
      </div>
    </footer>
  );
}
