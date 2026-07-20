import React, { useState } from 'react';
import { FiChevronDown, FiPhone, FiShoppingCart, FiBookOpen, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false); 

  const openMenu = (menuName) => setActiveMenu(menuName);
  const closeMenu = () => setActiveMenu(null);
  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <div className="navbar-wrapper">
      <nav className="container-fluid px-4 py-2 d-flex justify-content-between align-items-center">
        
        <a href="/" className="future-logo">
          <img 
            src="/logo.png" 
            alt="Future Upgrade Logo" 
            style={{ height: '50px', objectFit: 'contain' }} 
          />
        </a>

        <button className="mobile-toggle-btn" onClick={toggleMobileMenu}>
          {isMobileOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-content-wrapper ${isMobileOpen ? 'active' : ''} d-flex justify-content-between align-items-center flex-grow-1`}>
          
          <div className="left-nav-links d-flex align-items-center gap-4 ms-lg-4">
            
            <div 
              className="nav-item-wrapper"
              onMouseEnter={() => openMenu('courses')}
              onMouseLeave={closeMenu}
              onClick={() => openMenu(activeMenu === 'courses' ? null : 'courses')} // Click support for mobile
            >
              <button className="course-btn">
                Courses <FiChevronDown />
              </button>
              
              {activeMenu === 'courses' && (
                <div className="mega-menu-courses">
                  <div className="mega-sidebar">
                    <div className="sidebar-link active">Long Term Courses<br/><small className="text-muted fw-normal">Guaranteed improvement</small></div>
                    <div className="sidebar-link">One-to-one LIVE classes</div>
                    <div className="sidebar-link">Topic specific courses</div>
                    <div className="sidebar-link">Courses for Kids</div>
                  </div>
                  
                  <div className="mega-content">
                    <div className="course-column">
                      <h6><FiBookOpen color="#6b46c1" /> Find courses by class</h6>
                      <div className="course-item">Repeater <span>Science PCM</span></div>
                      <div className="course-item">Repeater <span>Science PCB</span></div>
                      <div className="course-item">Class 12 <span>Science PCM</span></div>
                      <div className="course-item">Class 12 <span>Commerce</span></div>
                    </div>

                    <div className="course-column">
                      <h6><FiSearch color="#d69e2e" /> Find courses by target</h6>
                      <div className="course-item">School tuition <span>For Class 3-12</span></div>
                      <div className="course-item">Offline Centres <span>Class 8-12</span></div>
                      <div className="course-item">JEE for Grade 12th <span>Subject Specific</span></div>
                      <div className="course-item">NEET for Grade 12th <span>Subject Specific</span></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="nav-item-wrapper position-relative" onMouseEnter={() => openMenu('kids')} onMouseLeave={closeMenu}>
              <span className="nav-link-custom" onClick={() => openMenu(activeMenu === 'kids' ? null : 'kids')}>Courses for Kids <FiChevronDown /></span>
              {activeMenu === 'kids' && (
                <div className="small-dropdown">
                  <div>English Superstar</div>
                  <div>Maths Master</div>
                  <div>Coding for Kids</div>
                </div>
              )}
            </div>

            <div className="nav-item-wrapper position-relative" onMouseEnter={() => openMenu('study')} onMouseLeave={closeMenu}>
              <span className="nav-link-custom" onClick={() => openMenu(activeMenu === 'study' ? null : 'study')}>Free study material <FiChevronDown /></span>
              {activeMenu === 'study' && (
                <div className="small-dropdown">
                  <div>NCERT Solutions</div>
                  <div>Previous Year Papers</div>
                  <div>Sample Papers</div>
                  <div>Important Formulas</div>
                </div>
              )}
            </div>

            <div className="nav-item-wrapper position-relative" onMouseEnter={() => openMenu('offline')} onMouseLeave={closeMenu}>
              <span className="nav-link-custom" onClick={() => openMenu(activeMenu === 'offline' ? null : 'offline')}>Offline Centres</span>
              {activeMenu === 'offline' && (
                <div className="small-dropdown">
                  <div>Find a Centre near you</div>
                  <div>Admissions Open</div>
                </div>
              )}
            </div>

            <div className="nav-item-wrapper position-relative" onMouseEnter={() => openMenu('more')} onMouseLeave={closeMenu}>
              <span className="nav-link-custom" onClick={() => openMenu(activeMenu === 'more' ? null : 'more')}>More <FiChevronDown /></span>
              {activeMenu === 'more' && (
                <div className="small-dropdown">
                  <div>About Us</div>
                  <div>Contact Us</div>
                  <div>Careers</div>
                </div>
              )}
            </div>
          </div>

          <div className="right-nav-links d-flex align-items-center gap-4">
            <div className="nav-link-custom" style={{cursor: 'pointer'}}>
              <FiShoppingCart size={20} /> Store
            </div>

            <div className="d-flex align-items-center gap-2">
              <div className="phone-box">
                <FiPhone size={16} />
              </div>
              <div className="d-flex flex-column lh-1">
                <span style={{ fontSize: '11px', color: '#666' }}>Talk to our experts</span>
                <strong style={{ fontSize: '14px' }}>1234-1453-003-674</strong>
              </div>
            </div>

            <button className="sign-in-btn">Sign in</button>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;