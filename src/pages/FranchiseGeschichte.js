import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Franchise.css';
import headerFranchiseMain from '../header_franchise_main.jpg';

const FranchiseGeschichte = () => {
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
            <Link to="/franchise/geschichte" className="submenu-item active">DIE ERFOLGSGESCHICHTE</Link>
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
              <h2>FAKTEN, DIE SCHMECKEN</h2>
              <p>
                Im Juli 1999 wurde Freddy Fresh gegründet. Frische, gesunde und schnelle Küche war das Ziel. 
                Niemand ahnte damals, welch großen Erfolg das System Freddy Fresh binnen weniger Jahre erzielen würde. 
                In über 23 Jahren wurde der Umsatz des gesamten Systems auf knapp 65 Millionen Euro (2022) gesteigert.
              </p>
              <p>
                Ein aktives und flexibles Management, das richtige Auge für Markt und Zielgruppen sowie der unbedingte 
                Wille, sich ständig zu verbessern, wurden zur Formel des Erfolgs. Seit der Zusammenarbeit mit dem ersten 
                Franchisenehmer im Jahre 2002 steuerte jeder einzelne Partner seinen Teil zu unserer Erfolgsgeschichte 
                verlässlich bei.
              </p>
              <p>
                Über 90 umsatzstarke Filialen zählt das Freddy-Fresh-System inzwischen (Stand 01/2023). 
                Mehr als 2.500 Mitarbeiter vertrauen auf sichere Arbeitsplätze und steigenden Lohn. 
                Knapp 20 Millionen Flyer und ein ständig angepasster und optimierter Onlineauftritt bewerben 
                unsere gesunden und frisch zubereiteten Produkte, die letztlich per E-Bike, Motorroller oder 
                mit unseren frisch designten Fahrzeugen schnellstmöglich bis an die Haustür der hungrigen 
                Kundschaft gebracht werden.
              </p>
              <p>
                Permanentes Controlling und ständig angepasste Unternehmensziele treiben Freddy Fresh auch weiterhin voran. 
                Ein gesundes Wachstum ist der moderate Wunsch und während die Konkurrenz auf schiere Masse zielt, 
                setzen wir bewusst auf Klasse, denn nur so funktioniert faires Franchising heutzutage.
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

export default FranchiseGeschichte;
