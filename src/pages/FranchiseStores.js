import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Franchise.css';
import headerFranchiseMain from '../header_franchise_main.jpg';

const FranchiseStores = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="franchise-page">
      {/* Hero Section */}
      <div className="franchise-hero">
        <img src={headerFranchiseMain} alt="Franchise Banner" className="hero-image" />
      </div>

      {/* Navigation */}
      <div className="franchise-navigation">
        <div className="franchise-menu">
          <div className="menu-header" onClick={toggleMenu}>
            <h2>FRANCHISE</h2>
            <span className={`chevron ${isMenuOpen ? 'up' : 'down'}`}>▼</span>
          </div>
          
          <div className={`submenu ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/franchise" className="submenu-item">FRANCHISE</Link>
            <Link to="/franchise/geschichte" className="submenu-item">DIE ERFOLGSGESCHICHTE</Link>
            <Link to="/franchise/konditionen" className="submenu-item">DIE KONDITIONEN</Link>
            <Link to="/franchise/partnerschaft" className="submenu-item">DIE PARTNERSCHAFT</Link>
            <Link to="/franchise/durchstarten" className="submenu-item">JETZT DURCHSTARTEN</Link>
            <Link to="/franchise/stores" className="submenu-item active">STORES</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="franchise-content">
        <div className="container">
          <div className="franchise-layout">
            {/* Left Column - Contact Info */}
            <div className="contact-column">
              <h3>BEI FRAGEN...</h3>
              <div className="company-info">
                <p><strong>FREDDY FRESH AG</strong></p>
                <p>Am Eichberg 6</p>
                <p>01561 Thiendorf</p>
              </div>
              
              <div className="contact-details">
                <p><strong>Telefon:</strong></p>
                <p className="contact-link">035795 28 53 81</p>
                
                <p><strong>Mail:</strong></p>
                <p className="contact-link">info@freddy-fresh.de</p>
              </div>
              
              <div className="franchise-logo">
                <div className="star-logo">★</div>
              </div>
              
              <div className="brochure-link">
                <button className="download-link">Franchisebroschüre downloaden</button>
              </div>
            </div>
            
            {/* Right Column - Available Locations */}
            <div className="content-column">
              <h2>FOLGENDE STANDORTE WARTEN AUF EINEN MOTIVIERTEN PARTNER</h2>
              
              <div className="available-locations">
                <h3>Aktuell:</h3>
                <ul className="location-list">
                  <li>Schönebeck</li>
                  <li>Gifhorn</li>
                  <li>Hannover-Badenstedt</li>
                  <li>Braunschweig-Lamme</li>
                  <li>Goslar</li>
                  <li>Magdeburg-Brückfeld</li>
                </ul>
                
                <p className="location-note">
                  <strong>Lust auf eine neue Herausforderung an einem der Standorte? Dann schreib uns.</strong>
                </p>
                
                <button className="inquiry-btn">Anfrage stellen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseStores;
