import React from 'react';
import './TopCarousel.css';

const TopCarousel = () => {
  const carouselImages = [
    '/carousel/3.png',
    '/carousel/2.png',
    '/carousel/3.png',
    '/carousel/1.jpg'
  ];

  return (
    <div className="carousel-wrapper">
      <div id="futurePromoCarousel" className="carousel slide" data-bs-ride="carousel">
        
        <div className="carousel-indicators custom-dashes">
          {carouselImages.map((_, index) => (
            <button 
              key={index}
              type="button" 
              data-bs-target="#futurePromoCarousel" 
              data-bs-slide-to={index} 
              className={index === 0 ? "active" : ""} 
              aria-current={index === 0 ? "true" : "false"} 
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner banner-radius">
          {carouselImages.map((imgSrc, index) => (
            <div 
              key={index} 
              className={`carousel-item ${index === 0 ? 'active' : ''}`} 
              data-bs-interval="3500" 
            >
              <img 
                src={imgSrc} 
                className="d-block w-100 carousel-img" 
                alt={`Future Grades Promotion ${index + 1}`} 
              />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default TopCarousel;