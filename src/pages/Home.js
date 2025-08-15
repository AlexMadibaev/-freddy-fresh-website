import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Импортируем изображения для промо-блоков
import aktionImage from '../aktion.jpg';
import sommergewinnspielImage from '../sommergewinnspiel.jpg';
import geschenkgutscheinImage from '../geschenkgutschein.jpg';
import jobsImage from '../jobs.jpg';
import freddyCoinsImage from '../freddy-coins.jpg';
import franchiseImage from '../franchise.jpg';

// Импортируем изображение для баннера
import bannerImage from '../banner.jpg';

const Home = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.log('Ошибка загрузки изображения');
    setImageError(true);
  };

  return (
    <div className="home">
      {/* Hero Section с баннером */}
      <section className="hero-banner">
        <div className="banner-background">
          {!imageError ? (
            <img 
              src={bannerImage}
              alt="Freddy Fresh Pizza Banner" 
              className="banner-image"
              onError={handleImageError}
            />
          ) : (
            <div className="banner-fallback">
              <div className="fallback-content">
                <h1>Pizza liefern lassen von Freddy Fresh</h1>
                <p>Schnell - heiß - freundlich - lecker</p>
                <Link to="/stores" className="btn btn-primary">
                  JETZT BESTELLEN »
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Promotional Grid */}
      <section className="promo-grid">
        <div className="container">
          <div className="promo-header">
            <div className="promo-banner">
              <Link to="/stores" className="promo-cta-btn">
                JETZT BESTELLEN »
              </Link>
            </div>
          </div>
          <div className="promo-items">
            <div className="promo-item">
              <div className="promo-image">
                <img src={aktionImage} alt="Aktion" className="promo-img" />
              </div>
              <div className="promo-content">
                <h3>AKTION</h3>
              </div>
            </div>
            
            <div className="promo-item">
              <div className="promo-image">
                <img src={sommergewinnspielImage} alt="Sommergewinnspiel" className="promo-img" />
              </div>
              <div className="promo-content">
                <h3>FREDDYS SOMMERGEWINNSPIEL</h3>

              </div>
            </div>
            
            <div className="promo-item">
              <div className="promo-image">
                <img src={geschenkgutscheinImage} alt="Geschenkgutschein" className="promo-img" />
              </div>
              <div className="promo-content">
                <h3>GESCHENK GUTSCHEIN</h3>

              </div>
            </div>
            
            <div className="promo-item">
              <div className="promo-image">
                <img src={jobsImage} alt="Jobs" className="promo-img" />
              </div>
              <div className="promo-content">
                <h3>JOBS</h3>
              </div>
            </div>
            
            <div className="promo-item">
              <div className="promo-image">
                <img src={freddyCoinsImage} alt="Freddy Coins" className="promo-img" />
              </div>
              <div className="promo-content">
                <h3>FREDDY COINS</h3>
              </div>
            </div>
            
            <div className="promo-item">
              <div className="promo-image">
                <img src={franchiseImage} alt="Franchise" className="promo-img" />
              </div>
              <div className="promo-content">
                <h3>FRANCHISE</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section className="franchise-section">
        <div className="franchise-banner">
          <div className="franchise-bg-image"></div>
          <div className="franchise-content">
            <h2 className="franchise-title">FAIR UND MIT SYSTEM ZUM ERFOLG</h2>
            <h3 className="franchise-subtitle">WERDE FRANCHISE PARTNER</h3>
            <Link to="/franchise" className="franchise-btn">
              MEHR INFOS »
            </Link>
          </div>
        </div>
      </section>

      {/* Pizza Delivery Section */}
      <section className="pizza-delivery">
        <div className="container">
          <div className="pizza-header">
            <h1 className="pizza-title">PIZZA LIEFERN LASSEN VON FREDDY FRESH</h1>
            <p className="pizza-subtitle">Schnell - heiß - freundlich - lecker</p>
          </div>
          
          <div className="reasons-section">
            <h2 className="reasons-title">GRÜNDE WARUM FREDDY FRESH DIE BESTEN PIZZEN LIEFERT!</h2>
            <div className="reasons-grid">
              <div className="reason-item">
                <span className="reason-number">1</span>
                <div className="reason-content">
                  <h3>Größte Auswahl!</h3>
                  <p>wenn du Pizza bestellen willst, genießt du eine große Auswahl bei unserem Freddy Fresh Pizza Lieferservice.</p>
                </div>
              </div>
              <div className="reason-item">
                <span className="reason-number">2</span>
                <div className="reason-content">
                  <h3>Bester Lieferservice in ganz Deutschland!</h3>
                  <p>Wir sind der Pizza Lieferservice deines Vertrauens und immer in deiner Nähe.</p>
                </div>
              </div>
              <div className="reason-item">
                <span className="reason-number">3</span>
                <div className="reason-content">
                  <h3>Frische Garantie!</h3>
                  <p>Bei uns bekommst du vielfältige und frische Pizza online - einfach und unkompliziert.</p>
                </div>
              </div>
              <div className="reason-item">
                <span className="reason-number">4</span>
                <div className="reason-content">
                  <h3>Nachhaltigkeit ist einfach lecker!</h3>
                  <p>Bei all unseren Produkten achten wir auf die Verwendung nachhaltig hergestellter Lebensmittel und somit auch hochwertige Qualität.</p>
                </div>
              </div>
              <div className="reason-item">
                <span className="reason-number">5</span>
                <div className="reason-content">
                  <h3>Wir haben das besondere Etwas!</h3>
                  <p>Damit sind wir kein beliebiger Pizza Lieferservice, sondern machen Pizza bestellen zu einem kulinarischen Vergnügen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu and Locations Section */}
      <section className="menu-locations">
        <div className="container">
          <div className="menu-locations-grid">
            <div className="menu-section">
              <h2 className="section-title">KLASSIKER, EXOT ODER BOCK AUF EINE EIGENKREATION? DU ENTSCHEIDEST! WIR LIEFERN!</h2>
              <p className="section-description">
                Neben den Pizza Klassikern wie zum Beispiel unserer <strong className="highlight">Pizza Margherita</strong> bieten wir dir auch "exotischere" Exemplare wie unsere <strong className="highlight">Pizza Rotterdam</strong> oder die <strong className="highlight">Pizza Kapstadt</strong> an - so kann jeder Pizza-Fan seine Lieblingspizza online bestellen. Sollte dir unsere Auswahl aber einmal nicht reichen, hast du die Möglichkeit, diverse zusätzliche Beläge auf deine Pizza zu packen, z.B. Zwiebeln, Paprika oder Sauce Hollandaise. Wenn es mal keine Pizza bestellen sein soll, bietet dir Freddy Fresh aber auch eine große Variation <strong className="highlight">knackiger und frischer Salate</strong>, <strong className="highlight">schmackhafter Burger</strong> und <strong className="highlight">leckerer Pasta</strong> an.
              </p>
            </div>
            
            <div className="locations-section">
              <h2 className="section-title">UNSERE FREDDY FRESH FILIALEN</h2>
              <div className="locations-list">
                <p className="locations-intro">Die Liste unserer Filialen:</p>
                <p className="cities-text">
                  Aschersleben, Aue, Bad Harzburg, Bautzen, Berlin, Berlin-Hellersdorf, Berlin-Prenzlauer Berg, Bernburg, Bitterfeld, Braunschweig, Braunschweig-Broitzem, Braunschweig-Lamme, Chemnitz, Chemnitz-Ost, Chemnitz-West, Coswig, Cottbus, Cottbus-Nord, Cottbus-Süd, Darmstadt, Delitzsch, Dessau, Dessau-Nord, Dessau-Süd, Dresden, Dresden-Altstadt, Dresden-Cotta, Dresden-Löbtau, Dresden-Ost, Dresden-Striesen, Dresden-Süd, Dresden-Weixdorf, Döbeln, Eisleben, Erfurt, Erfurt-Mitte, Erfurt-Nord, Eschweiler, Freiberg, Freiburg, Freital, Gera, Gifhorn, Goslar, Grimma, Großenhain, Görlitz, Halberstadt, Halle, Halle-Neustadt, Halle-Ost, Halle-Süd, Hoyerswerda, Jena, Jena-Drackendorf, Jena-West, Kamenz, Köthen, Leipzig, Leipzig-Möckern, Leipzig-Paunsdorf, Leipzig-Plagwitz, Leipzig-Stötteritz, Magdeburg, Magdeburg-Brückfeld, Magdeburg-Neustadt, Meerane, Meißen, Merseburg, Mühlhausen, Naumburg, Neubrandenburg, Nordhausen, Nürnberg-Maxfeld, Pirna, Plauen, Radeberg, Radebeul, Riesa, Saalfeld, Sangerhausen, Schönebeck, Staßfurt, Stendal, Weimar, Wernigerode, Wittenberg, Zeitz, Zwickau-Innenstadt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="additional-services">
        <div className="container">
          <h2 className="section-title">PIZZA LIEFERN LASSEN UND NOCH VIEL MEHR!</h2>
          <p className="section-description">
            Wir sind nicht nur ein Pizza Lieferdienst, sondern bereiten für dich auch <strong>bestes Fingerfood und Snacks mit köstlichen Dips</strong> zu.
          </p>
          
          <h3 className="services-subtitle">NEBEN DEM BESTEN GESCHMACK HABEN WIR AUCH DIE BESTEN LIEFERZEITEN!</h3>
          <p className="section-description">
            Pizza online bestellen und dank des Freddy Fresh Lieferdienst <strong>i.d.R. innerhalb von nur 30 Minuten</strong> genießen.
          </p>
          
          <p className="section-description">
            Und? Hast du jetzt noch mehr Hunger? Dann lass' dir dieses Essvergnügen nicht entgehen. Pizza bestellen ist mit Freddy Fresh einfach, schnell, sicher und ganz besonders lecker!
          </p>
          
          <p className="section-description">
            Kurzum: Freddy Fresh ist die beste Möglichkeit, um Pizza online in deiner Nähe zu bestellen. Unser Lieferservice liefert dir deine <strong className="highlight">Pizza Brötchen Schinken Käse</strong> oder <strong className="highlight">Pizza Budapest</strong> frisch und bequem nach Hause oder an den Arbeitsplatz. Zusätzlich kannst du mit unseren <strong className="highlight">regelmäßigen Freddy Fresh Gutscheinen und Newslettern</strong> satt sparen und günstig genießen. Dabei ist uns nicht nur dein Genuss wichtig, wir wollen dich mit unserem gesamten Bestellprozess begeistern. Diesen hohen Qualitätsanspruch teilen auch unsere Lieferanten bei Freddy Fresh Pizza an allen Standorten.
          </p>
          
          <p className="section-description">
            Wir sind in Bezug auf die Produkte einer Meinung: Nur <strong>nachhaltig</strong> produzierte und <strong>frische</strong> Lebensmittel ermöglichen eine <strong>gesunde</strong> Ernährung. Diesem Gedanken tragen wir im gesamten Produktspektrum von Freddy Fresh Pizza Rechnung und der tolle Geschmack unserer Pizza ist der beste Beweis dafür.
          </p>
          
          <div className="order-button-container">
            <Link to="/stores" className="order-btn">
              JETZT BESTELLEN »
            </Link>
          </div>
        </div>
      </section>

      {/* Burger Section */}
      <section className="burger-section">
        <div className="container">
          <h2 className="burger-title">TOP BURGER IN DEINER NÄHE: BURGER BESTELLEN & LIEFERN LASSEN</h2>
          <p className="burger-description">
            Neben ofenfrischer Pizza, kannst du im Freddy Fresh Onlineshop auch <strong className="highlight">saftige Burger bestellen</strong>. Auf der Freddy Fresh Speisekarte findest du die beliebtesten Streetfood Klassiker. Das Burger Restaurant in der Nähe hat geschlossen und du hast auch keine Zeit leckere Burger selbst zu machen? Kein Problem!
          </p>
          
          <h3 className="burger-service-title">FREDDY FRESH IST DEIN BURGER LIEFERSERVICE</h3>
          <p className="burger-service-description">
            Wirf jetzt einen Blick auf unsere Speisekarte und finde deine Burger Favoriten: Egal ob Hamburger, Cheeseburger, vegane Burger, <strong className="highlight">vegetarische Burger</strong>, Crispy Chicken oder ganz nach Originalrezept mit Burger Patties aus 100% echtem Rindfleisch. Wir empfehlen unseren heiß begehrten Classic Freddy Burger! Bei Freddy Fresh bist du genau richtig!
          </p>
          <p className="burger-service-description">
            Für das richtige Burger Rezept zählt die Qualität. Welche Zutaten am Ende zwischen die Brötchen kommen liegt dabei ganz bei dir. Bei unserem Burger Lieferservice bestellst du schnell und einfach, die Lieferzeiten sind kurz und der Geschmack ist, wie man ihn von einem guten <strong className="highlight">Burger Lieferdienst</strong> erwartet. Also mach es dir gemütlich und finde das perfekte Burger Menü für dich. Den Rest übernehmen wir!
          </p>
          
          <div className="order-button-container">
            <Link to="/stores" className="order-btn">
              JETZT BESTELLEN »
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
