import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Franchise.css';
import headerFranchiseMain from '../header_franchise_main.jpg';

const Franchise = () => {
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
            <Link to="/franchise" className="submenu-item active">FRANCHISE</Link>
            <Link to="/franchise/geschichte" className="submenu-item">DIE ERFOLGSGESCHICHTE</Link>
            <Link to="/franchise/konditionen" className="submenu-item">DIE KONDITIONEN</Link>
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
              <h2>FAIR UND MIT SYSTEM ZUM ERFOLG</h2>
              <p>
                Über 23 Jahre nach der Gründung ist unser Franchisesystem auf mittlerweile über 90 Filialen angewachsen. 
                Eine bemerkenswerte Erfolgsgeschichte, auf die man stolz sein kann.
              </p>
              <p>
                Dies soll allerdings kein Grund sein, um sich auszuruhen. Kontinuierlich arbeiten wir an der Weiterentwicklung 
                und Optimierung unseres Systems. Anfang 2009 gründeten wir in diesem Zuge die Freddy Fresh AG und seitdem 
                wurde in bisher jedem Jahr ein neuer Umsatzrekord aufgestellt.
              </p>
              <p>
                Dies ist nicht nur der Erfolg unseres Franchisesystems, sondern aller unserer Franchisepartner. 
                Von der Systemzentrale aus unterstützen wir jede einzelne Filiale mit frischen Ideen, klaren Konzepten 
                und ständiger Marktforschung, sodass eine permanente Weiterentwicklung gesichert ist.
              </p>
              <p>
                Vertraue auch Du auf unsere Erfahrung. Starte gemeinsam mit uns in Deine frische Zukunft. 
                Wir unterstützen Dich mit Deinem individuellen Unternehmenskonzept, liefern exakte Standortanalysen 
                und helfen bei allen Finanzierungsfragen. Profitiere von unseren Sonderkonditionen bei der Innenausstattung 
                und von unserem Know-How, um bald mit Deiner eigenen Freddy-Fresh-Filiale durchzustarten.
              </p>
              <p>
                <strong>Unser System wird so zu Deinem Erfolg. Versprochen!</strong>
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

export default Franchise;
