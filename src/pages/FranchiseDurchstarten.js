import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Franchise.css';
import headerFranchiseMain from '../header_franchise_main.jpg';

const FranchiseDurchstarten = () => {
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
            <Link to="/franchise/durchstarten" className="submenu-item active">JETZT DURCHSTARTEN</Link>
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
                <button className="download-link">Franchisebroschüre downloaden</button>
              </div>
            </div>
            
            {/* Right Column - Application Form */}
            <div className="content-column">
              <h2>JETZT UNVERBINDLICH INFOS ANFORDERN</h2>
              <p>
                Du bist auf der Suche nach einer neuen Herausforderung? Du hast Lust auf frische, 
                gesunde und schnelle Küche? Du siehst Dich selbst bereits in Deiner eigenen 
                Freddy-Fresh-Filiale? Dann nutze jetzt Deine Chance und kontaktiere uns noch heute. 
                Fülle dazu einfach den unten stehenden Fragebogen nach bestem Wissen aus. 
                Einige Tage später meldet sich ein Freddy-Fresh-Franchiseberater bei Dir. 
                Starte jetzt mit uns in Deine frische Zukunft.
              </p>
              <p>
                <strong>Wir freuen uns auf DICH!</strong>
              </p>
              
              <div className="application-form">
                <h3>Persönliche Angaben</h3>
                <form className="franchise-form">
                  <div className="form-group">
                    <label htmlFor="vorname">Vorname *</label>
                    <input type="text" id="vorname" name="vorname" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="nachname">Nachname *</label>
                    <input type="text" id="nachname" name="nachname" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="strasse">Straße *</label>
                    <input type="text" id="strasse" name="strasse" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="hausnummer">Hausnummer *</label>
                    <input type="text" id="hausnummer" name="hausnummer" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="plz">PLZ *</label>
                    <input type="text" id="plz" name="plz" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="ort">Ort *</label>
                    <input type="text" id="ort" name="ort" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="telefon">Telefon *</label>
                    <input type="tel" id="telefon" name="telefon" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">E-Mail *</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  
                  <h3>Beruflicher Werdegang</h3>
                  
                  <div className="form-group">
                    <label htmlFor="beruf">erlernter Beruf *</label>
                    <input type="text" id="beruf" name="beruf" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="studium">Studium</label>
                    <input type="text" id="studium" name="studium" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="taetigkeit">derzeitige Tätigkeit *</label>
                    <input type="text" id="taetigkeit" name="taetigkeit" required />
                  </div>
                  
                  <h3>Sonstige Informationen</h3>
                  
                  <div className="form-group">
                    <label htmlFor="eigenkapital">Verfügst Du über das notwendige Eigenkapital? *</label>
                    <div className="radio-group">
                      <label><input type="radio" name="eigenkapital" value="ja" required /> ja</label>
                      <label><input type="radio" name="eigenkapital" value="nein" required /> nein</label>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="schufa">Hast du einen negativen SCHUFA Eintrag? *</label>
                    <div className="radio-group">
                      <label><input type="radio" name="schufa" value="ja" required /> ja</label>
                      <label><input type="radio" name="schufa" value="nein" required /> nein</label>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="selbststaendig">Warst du schon einmal selbständig? *</label>
                    <div className="radio-group">
                      <label><input type="radio" name="selbststaendig" value="ja" required /> ja</label>
                      <label><input type="radio" name="selbststaendig" value="nein" required /> nein</label>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="stadt">In welcher Stadt möchtest Du gern einen Freddy Fresh Store eröffnen?</label>
                    <input type="text" id="stadt" name="stadt" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="mitteilungen">Raum für weitere Mitteilungen</label>
                    <textarea id="mitteilungen" name="mitteilungen" rows="4"></textarea>
                  </div>
                  
                  <div className="form-group checkbox-group">
                    <label>
                      <input type="checkbox" required />
                      Ja, Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich bin damit einverstanden, 
                      dass die von mir angegebenen Daten elektronisch erhoben und gespeichert werden. 
                      Meine Daten werden dabei nur streng zweckgebunden zur Bearbeitung und Beantwortung 
                      meiner Anfrage benutzt. Mit dem Absenden des Kontaktformulars erkläre ich mich mit 
                      der Verarbeitung einverstanden. Nach Abschluss der Verarbeitung werden die erhobenen 
                      Daten gelöscht, insofern diese nicht für die weitere Bearbeitung der Anfrage oder 
                      eines daraufhin entstandenen Auftrags weiter benötigt werden.
                    </label>
                  </div>
                  
                  <p className="required-note">* Bitte die Pflichtfelder ausfüllen</p>
                  
                  <button type="submit" className="submit-btn">Anfrage abschicken</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseDurchstarten;
