import React from 'react';
import { FiPlayCircle, FiCheckCircle } from 'react-icons/fi';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <div className="banner-text-content">
              <div className="trust-badge">
                <FiCheckCircle className="me-1" /> India's Top Teachers
              </div>
              
              <h1 className="hero-title">
                LIVE Online Classes <br />
                for <span>Better Results</span>
              </h1>
              
              <p className="hero-subtitle">
                Master your concepts with personalized attention, interactive learning, 
                and guaranteed improvement. Join the revolution of online education!
              </p>

              <div className="banner-buttons">
                <button className="btn-primary-custom">
                  Book a Free Demo
                </button>
                <button className="btn-secondary-custom d-flex align-items-center gap-2">
                  <FiPlayCircle size={20} /> Watch How It Works
                </button>
              </div>

              <div className="d-flex align-items-center gap-4 mt-4 pt-2">
                <div>
                  <h5 className="mb-0 fw-bold">1M+</h5>
                  <small className="text-muted">Happy Students</small>
                </div>
                <div style={{ width: '1px', height: '30px', backgroundColor: '#ddd' }}></div>
                <div>
                  <h5 className="mb-0 fw-bold">4.8/5</h5>
                  <small className="text-muted">Student Rating</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="banner-image-wrapper">
              <img 
                src="/Classroom.png" 
                alt="Student learning from Teacher" 
                className="hero-img" 
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;