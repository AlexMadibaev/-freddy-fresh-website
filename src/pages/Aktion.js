import React from 'react';
import { Link } from 'react-router-dom';
import './Aktion.css';

// Импортируем изображения для акций
import bannerImage from '../banner.jpg';
import palermoImage from '../palermo.webp';

const Aktion = () => {

  return (
    <div className="aktion-page">
      {/* Hero секция с баннером */}
      <section className="aktion-hero">
        <div className="aktion-hero-background">
          <img 
            src={bannerImage}
            alt="Freddy Fresh Meat Love Banner" 
            className="aktion-hero-bg-image"
          />
          <div className="pizza-overlay">
          </div>
        </div>
      </section>

      {/* Заголовок акции */}
      <div className="aktion-header">
        <h1>AKTUELLE AKTIONSKARTE</h1>
        <p>Nur für kurze Zeit und nur solange der Vorrat reicht!</p>
      </div>

            {/* Первая карточка продукта */}
      <div className="meatball-card">
        <div className="card-content">
          <div className="card-text">
            <h2>AMERICAN MEATBALL</h2>
            <p>mit Käse-Sahne-Soße, karamellisierten Zwiebeln, Meatballs, Freddys Gouda-Mozzarella-Mix, Baconstreifen und frischer Zwiebellauch</p>
            <div className="price">AB 10,99€</div>
            <button>JETZT BESTELLEN</button>
          </div>
          <div className="card-image">
            <img src={palermoImage} alt="American Meatball" />
          </div>
        </div>
      </div>

      {/* Вторая карточка продукта */}
      <div className="meatball-card">
        <div className="card-content">
          <div className="card-text">
            <h2>ITALIAN MEATBALL</h2>
            <p>mit Tomatensoße Napoli, Meatballs, Freddys Gouda-Mozzarella-Mix, Mozzarella, originaler Grana Padano und frisches Basilikum</p>
            <div className="price">AB 10,99€</div>
            <button>JETZT BESTELLEN</button>
          </div>
          <div className="card-image">
            <img src={palermoImage} alt="Italian Meatball" />
          </div>
        </div>
      </div>

      {/* Третья карточка продукта */}
      <div className="meatball-card">
        <div className="card-content">
          <div className="card-text">
            <h2>PASTA MEATBALL</h2>
            <p>mit Penne (Makkaroni) mit Meatballs, Tomatensoße Napoli – überbacken mit Freddys Gouda-Mozzarella-Mix</p>
            <div className="price">10,99€</div>
            <button>JETZT BESTELLEN</button>
          </div>
          <div className="card-image">
            <img src={palermoImage} alt="Pasta Meatball" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aktion;
