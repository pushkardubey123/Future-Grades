import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import './Inspire.css';

const Inspire = () => {
  const videoRef = useRef(null);
  const sliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const smallCardsData = [
    { id: 1, type: 'text', avatar: '/StudentImg/3.jpg', name: 'Chandvi Taneja',quote: 'Future Grades made learning fun and engaging. I am really grateful to the teachers.', badge: 'Student', achievement: 'NEET score 575' },
    { id: 2, type: 'text', quote: 'I had a great experience at Future Grades. All my concepts were clear and I felt confident...', avatar: '/StudentImg/2.jpg', name: 'Arya Verma', badge: 'Student', achievement: '98.4% CBSE XII' },
    { id: 3, type: 'text', quote: 'The LIVE Interactive classes with visual explanations helped me learn and retain...', avatar: '/StudentImg/1.jpg', name: 'Akshat Kumar', badge: 'Student', achievement: '98.2% CBSE XII' },
    { id: 4, type: 'text', quote: 'Future Grades made learning fun and engaging. I am really grateful to the teachers.', avatar: '/StudentImg/4.jpg', name: 'Rahul Sharma', badge: 'Student', achievement: '95% ICSE X' },
    { id: 5, type: 'text', quote: 'The mock tests provided were exactly like the real exams. Huge confidence booster!', avatar: '/StudentImg/5.jpg', name: 'Priya Singh', badge: 'Student', achievement: 'JEE Mains 99.2 PR' },
  ];

  return (
    <div className="inspire-section">
      <div className="container">
        <h2 className="section-title">Stories that inspire</h2>
        
        <div className="featured-card">
          <div className="row g-0">
            
            <div className="col-md-5">
              <div className="featured-img-wrapper" onClick={handleVideoClick}>
                <video 
                  ref={videoRef} 
                  src="/StudentImg/inspireVideo.mp4" 
                  className="featured-img" 
                  muted={false} 
                />
                
                {!isPlaying && (
                  <div className="play-btn-large">
                    <FaPlay />
                  </div>
                )}
              </div>
            </div>
            
            <div className="col-md-7">
              <div className="featured-content">
                <FaQuoteRight className="quote-icon" />
                <div className="featured-quote">
                  "After I joined the Eklavya batch at Future Grades, I cracked KVPY and WBJEE and discovered my true potential."
                </div>
                <div className="featured-author">
                  <h5>Rhythm Sabharwal</h5>
                  <p>AIR 2973 | NEET 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="position-relative mt-5">
          
          <div 
            className="nav-arrow-right d-none d-lg-flex" 
            style={{ left: '-20px', right: 'auto', zIndex: 10 }} 
            onClick={slideLeft}
          >
            <FaChevronLeft />
          </div>

          <div className="slider-track" ref={sliderRef}>
            {smallCardsData.map((card) => (
              <div className="slider-card-wrapper" key={card.id}>
                <div className="small-testimonial-card h-100">
                  
                  {card.type === 'video' ? (
                    <div className="small-video-thumb">
                      <img src={card.videoThumb} alt="video thumbnail" />
                      <div className="play-btn-small"><FaPlay /></div>
                    </div>
                  ) : (
                    <div className="small-quote-text">{card.quote}</div>
                  )}

                  <div className="author-info-box mt-auto">
                    <img src={card.avatar} alt={card.name} className="author-avatar" />
                    <div className="author-details">
                      <h6>{card.name} <span className="student-badge">{card.badge}</span></h6>
                      <p>{card.achievement}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          
          <div className="nav-arrow-right d-none d-lg-flex" onClick={slideRight}>
            <FaChevronRight />
          </div>
        </div>

        <div className="carousel-dots mt-4">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

      </div>
    </div>
  );
};

export default Inspire;