import React from 'react';
import './Qualitaet.css';
import qualitaetImage from '../header_qualitaet.jpg';

const Qualitaet = () => {
  return (
    <div className="qualitaet-page">
      {/* Hero секция с изображением */}
      <div className="qualitaet-hero">
        <div className="hero-image">
          <img 
            src={qualitaetImage} 
            alt="Freddy Fresh Qualität Hero" 
            className="hero-bg-image"
          />
        </div>
      </div>

      {/* Основной контент */}
      <div className="qualitaet-content">
        <div className="qualitaet-container">
          {/* Левая колонка - контактная информация */}
          <div className="contact-section">
            <h2>BEI FRAGEN...</h2>
            <div className="contact-details">
              <p>FREDDY FRESH AG</p>
              <p>Am Eichberg 6</p>
              <p>01561 Thiendorf</p>
            </div>
            <div className="contact-info">
              <p>Telefon: <a href="tel:035795285381">035795 28 53 81</a></p>
              <p>Mail: <a href="mailto:feedback@freddy-fresh.de">feedback@freddy-fresh.de</a></p>
            </div>
          </div>

          {/* Правая колонка - информация о качестве */}
          <div className="quality-section">
            <h2>HAUSTÜRGESCHÄFTE IN BESTER QUALITÄT</h2>
            <div className="quality-text">
              <p>
                Bei Freddy Fresh verwenden wir nur frische und nachhaltig produzierte Zutaten. 
                Von hochwertigem Schinken, Gouda, Grana Padano, veganen Optionen, frischen Kräutern, 
                ohne Konservierungsstoffe bis hin zu 100% irischem Rindfleisch - Qualität steht bei uns an erster Stelle.
              </p>
              <p>
                Unser Freddy Fresh Team arbeitet kontinuierlich an Verbesserungen, gesunden Produkten, 
                frischer Zubereitung, schneller Lieferung, Einhaltung der Verkehrsregeln und vor allem 
                an der Qualität, die für uns oberste Priorität hat.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Qualitaet;
