import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container-fluid p-5">
        <div className="row">
          
          <div className="col-lg-4 col-md-6 mb-5 pe-lg-4">
            <h5 className="footer-heading">Get link in sms to download the app</h5>
            
            <div className="sms-input-group">
              <select className="country-code">
                <option>+ 91</option>
              </select>
              <input type="text" className="mobile-input" placeholder="Enter mobile number" />
              <button className="btn-get-link">Get the link</button>
            </div>

            <img src="/google-play.svg" alt="Get it on Google Play" className="play-store-badge" />

            <div className="counselling-box">
              <div className="counselling-text">
                Know more about our courses. Book a free counselling session.
              </div>
              <button className="btn-expert">Speak to an expert</button>
            </div>

            <div className="contact-info-block">
              <div className="fw-bold mb-2 text-dark">TOLL FREE: 1234-1453-003-674</div>
              <div className="contact-row">
                <FiPhone className="contact-icon" />
                <span>91 988-660-2456 <br/><small className="text-muted">(9 AM to 9:30 PM on all days)</small></span>
              </div>
              <div className="contact-row">
                <FiMail className="contact-icon" />
                <span>vcare@futuregrades.com</span>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-heading">Company</h5>
            <ul className="footer-links-list">
              <li><a href="#" className="footer-link">About us</a></li>
              <li><a href="#" className="footer-link">Contact us</a></li>
              <li><a href="#" className="footer-link">futuregrades Blog</a></li>
              <li><a href="#" className="footer-link">News</a></li>
              <li><a href="#" className="footer-link">Child safety</a></li>
              <li><a href="#" className="footer-link">Why futuregrades</a></li>
              <li><a href="#" className="footer-link">Our results</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Help india learn</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Other Links</h5>
            <ul className="footer-links-list">
              <li><a href="#" className="footer-link">Free live classes</a></li>
              <li><a href="#" className="footer-link">Why teach with futuregrades</a></li>
              <li><a href="#" className="footer-link">Try WAVE</a></li>
              <li><a href="#" className="footer-link">Try Whiteboard</a></li>
              <li><a href="#" className="footer-link">futuregrades improvement promise</a></li>
              <li><a href="#" className="footer-link">VOLT</a></li>
              <li><a href="#" className="footer-link">Micro courses</a></li>
              <li><a href="#" className="footer-link">Maharastra Board</a></li>
              <li><a href="#" className="footer-link">Benefits</a></li>
              <li><a href="#" className="footer-link">Engineering Blog</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Courses</h5>
            <ul className="footer-links-list mb-4">
              <li><a href="#" className="footer-link">CBSE Tuitions</a></li>
              <li><a href="#" className="footer-link">ICSE Tuitions</a></li>
              <li><a href="#" className="footer-link">JEE (Main & Advanced)</a></li>
              <li><a href="#" className="footer-link">NEET</a></li>
              <li><a href="#" className="footer-link">Eklavya JEE</a></li>
              <li><a href="#" className="footer-link">Eklavya NEET</a></li>
              <li><a href="#" className="footer-link">Computer Science</a></li>
            </ul>

            <h5 className="footer-heading mt-4">futuregrades Super Kids</h5>
            <ul className="footer-links-list">
              <li><a href="#" className="footer-link">English Superstar for kids</a></li>
              <li><a href="#" className="footer-link">Spoken English</a></li>
              <li><a href="#" className="footer-link">Super Math</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;