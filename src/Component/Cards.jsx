import React from 'react';
import { FiBookOpen, FiAward, FiTarget, FiMonitor } from 'react-icons/fi';
import './Cards.css';

const Cards = () => {
  const cardData = [
    {
      id: 1,
      icon: <FiBookOpen />,
      title: "Ace your CBSE/ICSE results!",
      description: "Highest personal attention, One teacher One student",
      price: "888"
    },
    {
      id: 2,
      icon: <FiAward />,
      title: "Your best bet to JEE / NEET!",
      description: "Individual Attention, Maximum Results! One teacher One student",
      price: "1,049"
    },
    {
      id: 3,
      icon: <FiTarget />,
      title: "Get tailored learning for IB & IGCSE board!",
      description: "Your path to Academic Excellence!",
      price: "1,249"
    },
    {
      id: 4,
      icon: <FiMonitor />,
      title: "Learn Java & Python with Future Grades!",
      description: "From Good to Great: Improve your skills!",
      price: "999"
    }
  ];

  return (
    <div className="tutoring-section">
      <div className="container">
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-7 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
            <h2 className="section-title">
              <span className="highlight">One-to-One</span> Tutoring
            </h2>
            <div className="section-subtitle">
              Highest Personal <span className="purple-underline">Attention</span>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 text-center text-lg-end">
             <img src="/cardimg.png" alt="Tutoring Illustration" className="header-illustration" />
          </div>
        </div>

        <div className="row">
          {cardData.map((card) => (
            <div className="col-lg-3 col-md-6 mb-4" key={card.id}>
              <div className="card custom-tutoring-card">
                <div className="card-body d-flex flex-column">
                  
                  <div className="card-icon-box">
                    {card.icon}
                  </div>
                  
                  <h5 className="card-title-custom">{card.title}</h5>
                  <p className="card-text-custom">{card.description}</p>
                  
                  <div className="divider"></div>
                  
                  <div className="mt-auto">
                    <div className="price-section">
                      Starts At <span className="price-amount">₹ {card.price}/hr</span>
                    </div>
                    <button className="btn-tutor">
                      Find personal tutor &gt;
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Cards;