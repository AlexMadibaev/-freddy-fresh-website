import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="FREDDY FRESH" />
            </div>
          </div>
          <div className="footer-separator"></div>
          <h2 className="footer-title">WÄHLE JETZT DEIN LIEFERGEBIET!</h2>
          <div className="footer-separator"></div>
          <nav className="footer-nav">
            <Link to="/kontakt">KONTAKT</Link>
            <span className="nav-separator">·</span>
            <Link to="/impressum">IMPRESSUM</Link>
            <span className="nav-separator">·</span>
            <Link to="/datenschutz">DATENSCHUTZ</Link>
            <span className="nav-separator">·</span>
            <Link to="/franchise">FRANCHISE</Link>
            <span className="nav-separator">·</span>
            <Link to="/allergene">ZUSATZSTOFFE & ALLERGENE</Link>
          </nav>
          <div className="footer-copyright">
            2025 FREDDY FRESH AG | HOME
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
