import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    marketing: false,
    service: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookieSettings({
      necessary: true,
      marketing: true,
      service: true
    });
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookieSettings));
    setIsVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem('cookieConsent', 'none');
    setIsVisible(false);
  };

  const handleOpenSettings = () => {
    setIsVisible(true);
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const toggleCookieSetting = (category) => {
    if (category === 'necessary') return;
    setCookieSettings(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const getCookieStatus = () => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'all') return 'all';
    if (consent === 'none') return 'none';
    if (consent) {
      try {
        const settings = JSON.parse(consent);
        return Object.values(settings).filter(Boolean).length;
      } catch {
        return 'none';
      }
    }
    return 'none';
  };

  const cookieStatus = getCookieStatus();

  return (
    <>
      {/* Cookie Settings Button - Always Visible */}
      <button className="cookie-settings-btn" onClick={handleOpenSettings}>
        <span className="cookie-settings-icon">🍪</span>
        <span className="cookie-settings-text">Cookie-Einstellungen</span>
        {cookieStatus !== 'none' && (
          <span className="cookie-status-indicator">
            {cookieStatus === 'all' ? '✓' : `${cookieStatus}/3`}
          </span>
        )}
      </button>

      {/* Cookie Modal */}
      {isVisible && (
        <div className="cookie-overlay">
          <div className="cookie-modal">
            {/* Header */}
            <div className="cookie-header">
              <div className="cookie-title">
                <span className="cookie-icon">🍪</span>
                <div className="title-content">
                  <h2>Cookie-Einstellungen</h2>
                  <p className="subtitle">Verwalten Sie Ihre Datenschutzeinstellungen</p>
                </div>
              </div>
              <button className="cookie-close" onClick={handleClose}>
                <span>×</span>
              </button>
            </div>

            {/* Content */}
            <div className="cookie-content">
              <div className="cookie-description">
                <div className="info-box">
                  <h3>📋 Datenschutz-Information</h3>
                  <p>
                    Diese Website verwendet Cookies und ähnliche Technologien, um Ihnen das bestmögliche Nutzererlebnis zu bieten. 
                    Einige Cookies sind für die Grundfunktionen der Website erforderlich, während andere uns helfen, 
                    die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.
                  </p>
                </div>
              </div>

              <div className="cookie-categories">
                {/* Necessary Cookies */}
                <div className="cookie-category necessary-category">
                  <div className="category-header" onClick={() => toggleCategory('necessary')}>
                    <div className="category-info">
                      <div className="category-status">
                        <span className="status-icon necessary">✓</span>
                        <div className="category-details">
                          <span className="category-name">Notwendige Cookies</span>
                          <span className="category-description">Immer aktiv - für Grundfunktionen erforderlich</span>
                        </div>
                      </div>
                    </div>
                    <div className="category-controls">
                      <span className="category-badge necessary-badge">Erforderlich</span>
                      <span className="expand-icon">{expandedCategory === 'necessary' ? '−' : '+'}</span>
                    </div>
                  </div>
                  {expandedCategory === 'necessary' && (
                    <div className="category-content">
                      <div className="category-details-content">
                        <h4>Was sind notwendige Cookies?</h4>
                        <p>
                          Diese Cookies sind für die Grundfunktionen der Website unerlässlich. Sie ermöglichen die Navigation, 
                          sichere Bereiche und grundlegende Funktionen. Die Website kann ohne diese Cookies nicht ordnungsgemäß funktionieren.
                        </p>
                        <div className="cookie-examples">
                          <h5>Beispiele für notwendige Cookies:</h5>
                          <ul>
                            <li>Session-Management</li>
                            <li>Sicherheitsfunktionen</li>
                            <li>Spracheinstellungen</li>
                            <li>Warenkorb-Funktionen</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Marketing Cookies */}
                <div className="cookie-category">
                  <div className="category-header" onClick={() => toggleCategory('marketing')}>
                    <div className="category-info">
                      <div className="category-status">
                        <span className={`status-icon marketing ${cookieSettings.marketing ? 'active' : ''}`}>
                          {cookieSettings.marketing ? '✓' : '✗'}
                        </span>
                        <div className="category-details">
                          <span className="category-name">Marketing & Werbung</span>
                          <span className="category-description">Personalisierte Werbung und Inhalte</span>
                        </div>
                      </div>
                    </div>
                    <div className="category-controls">
                      <div className="toggle-container">
                        <span className="toggle-label">Aus</span>
                        <button 
                          className={`toggle-switch ${cookieSettings.marketing ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCookieSetting('marketing');
                          }}
                        >
                          <span className="toggle-handle"></span>
                        </button>
                        <span className="toggle-label">An</span>
                      </div>
                      <span className="expand-icon">{expandedCategory === 'marketing' ? '−' : '+'}</span>
                    </div>
                  </div>
                  {expandedCategory === 'marketing' && (
                    <div className="category-content">
                      <div className="category-details-content">
                        <h4>Marketing & Werbung Cookies</h4>
                        <p>
                          Diese Cookies werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte anzuzeigen. 
                          Sie helfen uns auch dabei, die Effektivität unserer Marketingkampagnen zu messen und zu verbessern.
                        </p>
                        <div className="affected-services">
                          <h5>Verwendete Dienste:</h5>
                          <div className="service-grid">
                            <div className="service-item">
                              <span className="service-icon">📊</span>
                              <span className="service-name">Google Analytics</span>
                            </div>
                            <div className="service-item">
                              <span className="service-icon">🗺️</span>
                              <span className="service-name">Google Maps</span>
                            </div>
                            <div className="service-item">
                              <span className="service-icon">⭐</span>
                              <span className="service-name">Proven Expert</span>
                            </div>
                            <div className="service-item">
                              <span className="service-icon">🛡️</span>
                              <span className="service-name">Google reCAPTCHA</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Service Cookies */}
                <div className="cookie-category">
                  <div className="category-header" onClick={() => toggleCategory('service')}>
                    <div className="category-info">
                      <div className="category-status">
                        <span className={`status-icon service ${cookieSettings.service ? 'active' : ''}`}>
                          {cookieSettings.service ? '✓' : '✗'}
                        </span>
                        <div className="category-details">
                          <span className="category-name">Performance & Analyse</span>
                          <span className="category-description">Website-Performance und Fehleranalyse</span>
                        </div>
                      </div>
                    </div>
                    <div className="category-controls">
                      <div className="toggle-container">
                        <span className="toggle-label">Aus</span>
                        <button 
                          className={`toggle-switch ${cookieSettings.service ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCookieSetting('service');
                          }}
                        >
                          <span className="toggle-handle"></span>
                        </button>
                        <span className="toggle-label">An</span>
                      </div>
                      <span className="expand-icon">{expandedCategory === 'service' ? '−' : '+'}</span>
                    </div>
                  </div>
                  {expandedCategory === 'service' && (
                    <div className="category-content">
                      <div className="category-details-content">
                        <h4>Performance & Analyse Cookies</h4>
                        <p>
                          Diese Cookies helfen uns dabei, die Performance unserer Website zu überwachen und zu verbessern. 
                          Sie sammeln Informationen über Ladezeiten, Fehler und Nutzungsmuster.
                        </p>
                        <div className="affected-services">
                          <h5>Verwendete Dienste:</h5>
                          <div className="service-grid">
                            <div className="service-item">
                              <span className="service-icon">⚡</span>
                              <span className="service-name">New Relic</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="cookie-actions">
              <div className="action-info">
                <p className="action-description">
                  Ihre Auswahl wird gespeichert und kann jederzeit über die Cookie-Einstellungen geändert werden.
                </p>
              </div>
              <div className="action-buttons">
                <button className="btn btn-secondary" onClick={handleAcceptSelected}>
                  <span className="btn-icon">⚙️</span>
                  Auswahl speichern
                </button>
                <button className="btn btn-primary" onClick={handleAcceptAll}>
                  <span className="btn-icon">✅</span>
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;


