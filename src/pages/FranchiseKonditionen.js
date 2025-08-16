import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Franchise.css';
import headerFranchiseMain from '../header_franchise_main.jpg';

const FranchiseKonditionen = () => {
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
            <Link to="/franchise/konditionen" className="submenu-item active">DIE KONDITIONEN</Link>
            <Link to="/franchise/partnerschaft" className="submenu-item">DIE PARTNERSCHAFT</Link>
            <Link to="/franchise/durchstarten" className="submenu-item">JETZT DURCHSTARTEN</Link>
            <Link to="/franchise/stores" className="submenu-item">STORES</Link>
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
                <a href="#" className="download-link">Franchisebroschüre downloaden</a>
              </div>
            </div>
            
            {/* Right Column - Main Content */}
            <div className="content-column">
              <h2>ZAHLEN & FAKTEN ZUM GENIESSEN!</h2>
              <p>
                Vom ersten Kontakt bis zur Eröffnung der eigenen Freddy-Fresh-Filiale vergeht bei uns nur wenig Zeit. 
                Wir führen Dich von der Markt- und Standortanalyse, über die Planung, Finanzierung und den Bau 
                Deines Stores bis zum Beginn der eigenen wirtschaftlichen Selbstständigkeit zuverlässig und mit Plan.
              </p>
              <p>
                Binnen weniger Monate erwirtschaftest Du Dein erstes Geld. Schneller als gedacht sind die 
                Anfangsinvestitionen zurück in der eigenen Tasche. Schmale 1.500,- Euro gehen als Einstiegsgebühr 
                direkt an die Freddy Fresh AG
              </p>
              <p>
                Alles Weitere fließt direkt als Investition in Deine persönliche Freddy-Fresh-Filiale. 
                Zwischen 100.000,- und 150.000,- Euro werden hierfür benötigt. Als mit Abstand günstigster 
                Franchiseanbieter gehen wir offen mit diesen Summen um. Wo die Konkurrenten endlos schweigen, 
                klären wir unmissverständlich auf.
              </p>
              <p>
                Im laufenden Betrieb gehen lediglich 5% Deines Umsatzes als Franchisegebühr an die Freddy Fresh AG. 
                Ein weiteres Prozent fordert die Investition in einheitliche Werbemittel. Das war´s! 
                Preiswerter als jedes andere Franchisesystem am Markt ebnet Dir Freddy Fresh den Weg – 
                kostengünstig, fair und sicher.
              </p>
              
              <div className="next-link">
                <a href="#" className="weiter-link">WEITER &gt;</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Branding Section */}
      <div className="branding-section">
        <div className="container">
          <div className="branding-content">
            <div className="branding-star">★</div>
            <h3>FREDDY FRESH</h3>
            <h4>WÄHLE JETZT DEIN LIEFERGEBIET!</h4>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="franchise-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <a href="#">KONTAKT</a>
              <span className="separator">•</span>
              <a href="#">IMPRESSUM</a>
              <span className="separator">•</span>
              <a href="#">DATENSCHUTZ</a>
              <span className="separator">•</span>
              <a href="#">FRANCHISE</a>
              <span className="separator">•</span>
              <a href="#">ZUSATZSTOFFE & ALLERGENE</a>
            </div>
            <div className="footer-copyright">
              <p>2025 FREDDY FRESH AG | HOME</p>
            </div>
            <div className="footer-star">★</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseKonditionen;
