/*import React from 'react'
import './Intro.css'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
    <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>AquaPulse </span>City Management System</span>
        <p className='introPara'>Aims to provide analysis for optimum Water consumption in various domains.</p>
        <Link><button className='btn'>Try it</button></Link>
    </div>
    
    </section>
  );
}

export default Intro;
*/
import React from 'react';
import './Intro.css';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <>
      <section id="intro">
        {/* Water Droplet Animation Background */}
        <div className="droplet-container">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="droplet"></div>
          ))}
        </div>

        {/* Animated Wave Background */}
        <div className="wave-container">
          <div className="wave"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>

        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">AquaPulse</span> City Management System
          </span>
          <p className="introPara">
            Aims to provide analysis for optimum Water consumption in various domains.
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Efficiency</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30%</span>
              <span className="stat-label">Water Saved</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Monitoring</span>
            </div>
          </div>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn">
              Try it
              <div className="btn-ripple"></div>
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-waves">
          <div className="footer-wave"></div>
          <div className="footer-wave"></div>
        </div>
        
        <div className="footer-content">
          <div className="footer-section">
            <h3>AquaPulse</h3>
            <p>Smart water management solutions for sustainable cities.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/home" smooth={true}>Home</Link></li>
              <li><Link to="features" smooth={true}>Features</Link></li>
              <li><Link to="about" smooth={true}>About</Link></li>
              <li><Link to="/contact" smooth={true}>Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: info@aquapulse.com</li>
              <li>Phone: +919876543210</li>
              <li>Address: 123 Water St, Smart City</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#" className="social-icon">Facebook</a>
              <a href="#" className="social-icon">Twitter</a>
              <a href="#" className="social-icon">Instagram</a>
              <a href="#" className="social-icon">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 AquaPulse. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Intro;
