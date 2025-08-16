import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import menuIcon from '../menu.svg';
import logoIcon from '../logo.svg';
import profileIcon from '../profile.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Логотип слева - иконка меню */}
        <div className="header-logo-left">
          <Link to="/menu">
            <img src={menuIcon} alt="Menu" className="menu-icon" />
          </Link>
        </div>

        {/* Центральный логотип */}
        <div className="header-logo-center">
          <Link to="/" className="main-logo">
            <img src={logoIcon} alt="Freddy Fresh" className="logo-image" />
          </Link>
        </div>

        {/* Правая часть - иконки */}
        <div className="header-actions">
          <button className="profile-icon">
            <img src={profileIcon} alt="Profile" className="profile-svg" />
          </button>
          <button className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Мобильное меню */}
        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <ul className="mobile-nav-list">
              <li><Link to="/stores" className="mobile-nav-link">JETZT BESTELLEN</Link></li>
              <li><Link to="/stores" className="mobile-nav-link">STORES</Link></li>
              <li><Link to="/menu" className="mobile-nav-link">SPEISEKARTE</Link></li>
              <li><Link to="/aktion" className="mobile-nav-link">AKTION</Link></li>
              <li><Link to="/feedback" className="mobile-nav-link">FEEDBACK</Link></li>
              <li><Link to="/jobposting" className="mobile-nav-link">JOBS</Link></li>
              <li className="dropdown-item">
                <span className="mobile-nav-link dropdown-toggle" onClick={toggleDropdown}>
                  FRANCHISE ▼
                </span>
                <ul className={`mobile-dropdown ${isDropdownOpen ? 'show' : ''}`}>
                  <li><Link to="/franchise">Franchise</Link></li>
                  <li><Link to="/franchise/geschichte">Die Erfolgsgeschichte</Link></li>
                  <li><Link to="/franchise/konditionen">Die Konditionen</Link></li>
                  <li><Link to="/franchise/partnerschaft">Die Partnerschaft</Link></li>
                  <li><Link to="/franchise/durchstarten">Jetzt Durchstarten</Link></li>
                  <li><Link to="/franchise/stores">Stores</Link></li>
                </ul>
              </li>
              <li><Link to="/qualitaet" className="mobile-nav-link">QUALITÄT</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
