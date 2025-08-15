  import React, { useState, useEffect } from 'react';
import { companyInfo } from '../data/companyInfo';
import { useLocation } from 'react-router-dom';
import './Stores.css';
import headerStoreMapImage from '../header_store_map.jpg';
import callmeIcon from '../callme.svg';

const Stores = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [address, setAddress] = useState('');
  const location = useLocation();

  // Получаем поисковый запрос из состояния навигации
  useEffect(() => {
    if (location.state?.searchTerm) {
      setSearchTerm(location.state.searchTerm);
    }
  }, [location.state]);

  // Фильтрация магазинов по поисковому запросу
  const filteredStores = companyInfo.stores.filter(store =>
    store.name.replace('\n', ' ').toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.address.street.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (address.trim()) {
      setSearchTerm(address);
    }
  };

  return (
    <div className="stores-page">
      {/* Первый блок с поиском адреса */}
      <section className="store-search-section">
        <div className="store-search-background">
          <img 
            src={headerStoreMapImage}
            alt="Freddy Fresh Store Map" 
            className="store-search-bg-image"
          />
        </div>
        
        <div className="store-search-content">
          <div className="search-form-container">
            <h1 className="search-title">
              <span className="title-line"></span>
              PIZZA ONLINE BESTELLEN
              <span className="title-line"></span>
            </h1>
            
            <form onSubmit={handleAddressSubmit} className="search-form">
              <input
                type="text"
                placeholder="Deine Straße 1, 12345 Stadt"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="address-input"
                required
              />
              <button type="submit" className="order-button">
                ONLINE BESTELLEN
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Основной контент страницы */}
      <div className="container">
        <div className="stores-header">
          <h1 className="stores-title">UNSERE FREDDY FRESH FILIALEN</h1>
          <p className="stores-subtitle">
            Finde deine nächste Freddy Fresh Filiale und bestelle deine Lieblingspizza
          </p>
        </div>

        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Stadt oder Ort suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <div className="search-icon">🔍</div>
          </div>
        </div>

        <div className="stores-content">
          {filteredStores.length > 0 ? (
            <div className="stores-grid">
              {filteredStores.map((store) => (
                <div key={store.id} className="store-card">
                  <h2 className="store-name">{store.name}</h2>
                  
                  <div className="store-address">
                    <p>{store.address.street}</p>
                    <p>{store.address.city}</p>
                  </div>
                  
                  <div className="store-owner">
                    <p><strong>Inhaber:</strong> {store.owner}</p>
                  </div>
                  
                  <div className="store-contact">
                    <p><strong>E-Mail:</strong> <a href={`mailto:${store.contact.email}`} className="store-email">{store.contact.email}</a></p>
                    <p className="store-phone">
                      <span className="phone-icon">
                        <img src={callmeIcon} alt="Phone" className="phone-svg-icon" />
                      </span>
                      {store.contact.phone}
                    </p>
                  </div>
                  
                  <div className="store-hours">
                    <h3>Öffnungszeiten:</h3>
                    <div className="hours-list">
                      {Object.entries(store.hours).map(([day, hours]) => (
                        <div key={day} className="hours-item">
                          <span className="day">{day}</span>
                          <span className="hours">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="store-note">
                    <p>{store.note}</p>
                  </div>
                  
                  <div className="store-actions">
                    <button className="order-btn-primary">
                      JETZT ONLINE BESTELLEN {'>>'}
                    </button>
                    <button className="delivery-area-btn">
                      <span className="map-icon">🗺️</span>
                      LIEFERGEBIET ANZEIGEN
                    </button>
                    <button className="menu-pdf-btn">
                      <span className="pdf-icon">📄</span>
                      SPEISEKARTE PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>Keine Filialen für "{searchTerm}" gefunden.</p>
              <p>Versuche einen anderen Suchbegriff.</p>
            </div>
          )}
        </div>

        
      </div>
    </div>
  );
};

export default Stores;
