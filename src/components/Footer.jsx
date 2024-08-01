import React from "react";
import "../css/Footer.scss";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3 className="footer-title-contact">Contact Information</h3>
          <a href="mailto:alvarofrdesign@gmail.com"><button className="footer-button">Email</button></a>
          {/* <button className="footer-button">Telegram</button> */}
        </div>
        <div className="footer-links-section">
          <div className="footer-links">
            <h3 className="footer-title">( Content )</h3>
            <ul className="footer-links-list">
              <li className="footer-link">
                <a href="#projects">
                  <p>Projects</p>
                </a>
              </li>
              <li className="footer-link">
                <a href="#other-projects">
                  <p>Other Projects</p>
                </a>
              </li>
              <li className="footer-link">
                <a href="#skills">
                  <p>Skills</p>
                </a>
              </li>
              <li className="footer-link">
                <a href="#about">
                  <p>About</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">( Social )</h3>
            <ul className="footer-links-list">
              <li className="footer-link">
                <a href="https://github.com/alvaro347">
                  <i className="fab fa-youtube footer-icon"></i>
                  <p>GitHub</p>
                </a>
              </li>
              <li className="footer-link">
                <a href="https://www.linkedin.com/in/alvaro-fernandez-rodriguez/?locale=en_US">
                  <i className="footer-icon"></i>
                  <p>LinkedIn</p>
                </a>
              </li>
              <li className="footer-link">
                <a href="https://www.instagram.com/alvarogna/">
                  <i className="footer-icon"></i>
                  <p>Instagram</p>
                </a>
              </li>
              <li className="footer-link">
                <a href="https://www.artstation.com/alvaro347">
                  <i className="footer-icon"></i>
                  <p>ArtStation</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-logo">
        <h2 className="footer-title-logo">AFR-STUDIO</h2>
        <div className="footer-bottom">
          <a href="/" className="footer-text">
            &copy; 2024 AFR Studio
          </a>
          <a href="/" className="footer-text">
            Privacy & Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
