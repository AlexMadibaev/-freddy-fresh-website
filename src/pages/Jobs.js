import React from 'react';
import './Jobs.css';
import jobsImage from '../header_jobs.jpg';

const Jobs = () => {
  return (
    <div className="jobs-page">
      {/* Hero секция с изображением */}
      <div className="jobs-hero">
        <div className="hero-image">
          <img 
            src={jobsImage} 
            alt="Freddy Fresh Jobs Hero" 
            className="hero-bg-image"
          />
        </div>
      </div>

      {/* Основной контент */}
      <div className="jobs-content">
        <div className="jobs-container">
          {/* Левая секция - Контактная информация */}
          <div className="jobs-contact-section">
            <h2>BEWIRB DICH JETZT:</h2>
            <div className="contact-details">
              <p>FREDDY FRESH AG</p>
              <p>Am Eichberg 6</p>
              <p>01561 Thiendorf</p>
            </div>
            <div className="email-contact">
              <p>Mail: <a href="mailto:jobs@freddy-fresh.de">jobs@freddy-fresh.de</a></p>
            </div>
          </div>

          {/* Правая секция - Приветствие и форма */}
          <div className="jobs-welcome-section">
            <h1>JOBS » WILLKOMMEN IM TEAM</h1>
            <p>
              Der Erfolg gibt der frischen Philosophie von Freddy Fresh in jeder Hinsicht recht. Das ständig wachsende 
              Filial- und Partnernetzwerk schafft Jobs und zahlreiche Ausbildungsplätze! Auch die Karrierechancen stehen 
              gut: Viele unserer ehemaligen Pizzabäcker leiten mittlerweile eine eigene Filiale. Willst Du die Chance 
              auf einen Job mit vielfältigen Aufgaben bei uns nutzen? Dann schreib' doch einfach eine E-Mail an:
            </p>
            
            <div className="red-line"></div>
            
            <button className="initiative-button">
              INITIATIV BEWERBEN »
            </button>
            
            <div className="job-filters">
              <div className="filter-item">
                <select className="filter-select">
                  <option>Filiale auswählen</option>
                </select>
              </div>
              <div className="filter-item">
                <select className="filter-select">
                  <option>Job Typ auswählen</option>
                </select>
              </div>
              <div className="filter-item">
                <select className="filter-select">
                  <option>Job auswählen</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Секция с вакансиями */}
      <div className="jobs-vacancies-section">
        <div className="jobs-container">
          <h2>Freie Stellen:</h2>
        </div>
        
        <div className="jobs-container">
          <div className="vacancies-grid">
            <div className="vacancy-item">
              <h3>Auslieferungsfahrer - 40H / Woche (Vollzeit)</h3>
              <p className="vacancy-location">06449 Aschersleben</p>
              <p className="vacancy-description">Wir freuen uns auf Euch!</p>
              <button className="vacancy-button">weiterlesen</button>
            </div>

            <div className="vacancy-item">
              <h3>Auslieferungsfahrer - 6-29H / Woche (Teilzeit)</h3>
              <p className="vacancy-location">06449 Aschersleben</p>
              <p className="vacancy-description">Wir freuen uns auf Euch!</p>
              <button className="vacancy-button">weiterlesen</button>
            </div>

            <div className="vacancy-item">
              <h3>Küchen-/Servicekraft - 40H / Woche (Vollzeit)</h3>
              <p className="vacancy-location">06449 Aschersleben</p>
              <p className="vacancy-description">Wir freuen uns auf Euch!</p>
              <button className="vacancy-button">weiterlesen</button>
            </div>

            <div className="vacancy-item">
              <h3>Küchen-/Servicekraft - 6-29H / Woche (Teilzeit)</h3>
              <p className="vacancy-location">06449 Aschersleben</p>
              <p className="vacancy-description">Wir freuen uns auf Euch!</p>
              <button className="vacancy-button">weiterlesen</button>
            </div>

            <div className="vacancy-item">
              <h3>Auslieferungsfahrer (Pauschal) - Minijob (Steuerfrei)</h3>
              <p className="vacancy-location">06449 Aschersleben</p>
              <p className="vacancy-description">Wir freuen uns auf Euch!</p>
              <button className="vacancy-button">weiterlesen</button>
            </div>

            <div className="vacancy-item">
              <h3>Auslieferungsfahrer E-Bike (Minijob)</h3>
              <p className="vacancy-location">06449 Aschersleben</p>
              <p className="vacancy-description">Wir freuen uns auf Euch!</p>
              <button className="vacancy-button">weiterlesen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
