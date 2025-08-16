import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Franchise.css';
import headerFranchiseMain from '../header_franchise_main.jpg';

const FranchisePartnerschaft = () => {
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
            <Link to="/franchise/partnerschaft" className="submenu-item active">DIE PARTNERSCHAFT</Link>
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
              <h2>ZUSAMMENARBEIT, DIE SCHMECKT</h2>
              <p>
                Der Start in die Selbstständigkeit kann holprig werden. Nicht so mit Freddy Fresh. 
                Wir räumen Stolpersteine, bürokratische Hürden und versteckte Fallen für unsere Partner 
                aus dem Weg. Statt Problemen warten finanzielle Anreize auf Dich. Statt selbst nach dem 
                richtigen Weg suchen zu müssen, kannst Du sofort geführt und sicher durchstarten.
              </p>
              <p>
                Eine starke Marke, ein hoher Bekanntheitsgrad sowie ein ausgezeichnetes Image stehen 
                vom ersten Tag an hinter Dir. Ein durchdachtes und geprüftes Unternehmenskonzept liegt 
                kurz nach Unterzeichnung des Vertrages auf Deinem Tisch. Umfassend durch die Systemzentrale 
                betreut, gehst Du mit Freddy an den Start.
              </p>
              <p>
                Von Finanzierungsfragen über rechtliche Betreuung, bis hin zur Bilanz- und Steuerberatung 
                stehen starke Partner an Deiner Seite. 40% Nachlass auf Großküchentechnik, zertifizierte 
                Lieferanten, ein professionelles EDV-System samt Kundendienst stehen jedem Franchisenehmer 
                zur Verfügung.
              </p>
              <p>
                Dank unseres Beratungs- und Schulungssystems für Dich und Deine Mitarbeiter, eines 
                franchise-eigenen Controllings sowie einheitlicher Werbe- und Merchandiseartikel startest 
                Du ruhig und vor allem bestens vorbereitet in die Selbstständigkeit. Du musst Dich also 
                nur auf das Wichtigste konzentrieren: Das Verkaufen unserer leckeren Speisen.
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

export default FranchisePartnerschaft;
