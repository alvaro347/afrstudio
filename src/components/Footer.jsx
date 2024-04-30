import React from "react";
import "../css/Footer.scss";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3 className="footer-title">Contact Information</h3>
          <button className="footer-button">Email</button>
          <button className="footer-button">Telegram</button>
        </div>
        <div className="footer-list-links">

        <div className="footer-links">
          <h3 className="footer-title">Content</h3>
          <ul className="social-list">
            <li className="social-icon">
              <p>Projects</p>
            </li>
            <li className="social-icon">
              <p>Skills</p>
            </li>
            <li className="social-icon">
              <p>About</p>
            </li>
            <li className="social-icon">
              <p>Portfolio</p>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h3 className="footer-title">Content</h3>
          <ul className="social-list">
            <li className="social-icon">
              <a href="https://www.youtube.com/channel/UCQ79F_bjrqNf8wKI5LVhFBA?view_as=subscriber">
                <i className="fab fa-youtube footer-icon"></i>
                <p>GitHub</p>
              </a>
            </li>
            <li className="social-icon">
              <a href="https://www.instagram.com/alvarogna/">
                <i className="footer-icon"></i>
                <p>LinkedIn</p>
              </a>
            </li>
            <li className="social-icon">
              <a href="https://alvaro347.deviantart.com">
                <i className="footer-icon"></i>
                <p>SketchFab</p>
              </a>
            </li>
            <li className="social-icon">
              <a href="https://www.linkedin.com/in/alvaro-fernandez-rodriguez/">
                <i className="footer-icon"></i>
                <p>YouTube</p>
              </a>
            </li>
            <li className="social-icon">
              <a href="https://github.com/alvaro347">
                <i className="fab fa-github-square footer-icon"></i>
                <p>YouTube</p>
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
            Site
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
