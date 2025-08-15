import React, { useState } from 'react';
import './Feedback.css';
import headerBewertungImage from '../header_bewertung.jpg';
import googleLogo from '../Google__G__logo.svg';

const Feedback = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');

  const stores = [
    { name: 'FF Aschersleben', url: 'https://search.google.com/local/writereview?placeid=ChIJ2Tyu8jbBpUcRC4of3BUKJF8' },
    { name: 'FF Aue', url: 'https://search.google.com/local/writereview?placeid=ChIJXaFYyRbKoEcRTP2tIp3PZpc' },
    { name: 'FF Bad Harzburg', url: 'https://search.google.com/local/writereview?placeid=ChIJR5nesuYVpUcREwihMtR2818' },
    { name: 'FF Bautzen', url: 'https://search.google.com/local/writereview?placeid=ChIJBS8RRI9VCEcRsi99YXFEt4c' },
    { name: 'FF Berlin-Hellersdorf', url: 'https://search.google.com/local/writereview?placeid=ChIJ8zfRLPlLqEcRuvjhvLKfL3Y' },
    { name: 'FF Berlin-Prenzlauer Berg', url: 'https://search.google.com/local/writereview?placeid=ChIJs3XV0fdNqEcRF6du5ns0Hj4' },
    { name: 'FF Bernburg', url: 'https://search.google.com/local/writereview?placeid=ChIJHzSWVMrgpUcRL1IflMmoStg' },
    { name: 'FF Bitterfeld', url: 'https://search.google.com/local/writereview?placeid=ChIJCfGt-thDpkcRD1ApnIRz0Is' },
    { name: 'FF Braunschweig-Broitzem', url: 'https://search.google.com/local/writereview?placeid=ChIJ6_-9c6JYpUcRiGZ_gNZzhaE' },
    { name: 'FF Braunschweig-Lamme', url: 'https://search.google.com/local/writereview?placeid=ChIJHzyprRD3r0cRFo37ByG47XY' },
    { name: 'FF Chemnitz-Ost', url: 'https://search.google.com/local/writereview?placeid=ChIJnxkabywqckERNFbsdGsyrsk' },
    { name: 'FF Chemnitz-West', url: 'https://search.google.com/local/writereview?placeid=ChIJNYahhspHp0cR_JvJbdyu2Fc' },
    { name: 'FF Coswig', url: 'https://search.google.com/local/writereview?placeid=ChIJoyBwN5tUqEcRs7z0vZBxu8s' },
    { name: 'FF Cottbus-Nord', url: 'https://search.google.com/local/writereview?placeid=ChIJ_7pI52N0CEcRwrcsfXu6bM0' },
    { name: 'FF Cottbus-Süd', url: 'https://search.google.com/local/writereview?placeid=ChIJnegVVWtzCEcRqD_xXLVNPTc' },
    { name: 'FF Darmstadt', url: 'https://search.google.com/local/writereview?placeid=ChIJpT1YkmhwvUcRHp-3UoFamCk' },
    { name: 'FF Delitzsch', url: 'https://search.google.com/local/writereview?placeid=ChIJB52M7yhbpkcRzbxK_C0uyUM' },
    { name: 'FF Dessau-Nord', url: 'https://search.google.com/local/writereview?placeid=ChIJTXbeMHwccEERWUxfJAPOEJk' },
    { name: 'FF Dessau-Süd', url: 'https://search.google.com/local/writereview?placeid=ChIJH45ORw4RpkcRF1MFkMJMMPM' },
    { name: 'FF Dresden-Altstadt', url: 'https://search.google.com/local/writereview?placeid=ChIJVRbM6FLPCUcRY0lT66ZoU30' },
    { name: 'FF Dresden-Cotta', url: 'https://search.google.com/local/writereview?placeid=ChIJv6ihvI3PCUcRuZAqoVGF7yM' },
    { name: 'FF Dresden-Löbtau', url: 'https://search.google.com/local/writereview?placeid=ChIJZQ_kEYLFCUcRY6lqKFQYUJQ' },
    { name: 'FF Dresden-Ost', url: 'https://search.google.com/local/writereview?placeid=ChIJCcTmqMDHCUcR9tpCceoVCHU' },
    { name: 'FF Dresden-Striesen', url: 'https://search.google.com/local/writereview?placeid=ChIJ7YkTTJjICUcRRPTzZd45omM' },
    { name: 'FF Dresden-Süd', url: 'https://search.google.com/local/writereview?placeid=ChIJ75qhZ23GCUcR8eP8zm2eec4' },
    { name: 'FF Dresden-Weixdorf', url: 'https://search.google.com/local/writereview?placeid=ChIJc_ixJhPMCUcRR7mYBeyN2Ws' },
    { name: 'FF Döbeln', url: 'https://search.google.com/local/writereview?placeid=ChIJ7UCyGvhxp0cRU4qF19jlfhw' },
    { name: 'FF Eisleben', url: 'https://search.google.com/local/writereview?placeid=ChIJE_LrDUnTpUcRIJvZiwMpdos' },
    { name: 'FF Erfurt-Mitte', url: 'https://search.google.com/local/writereview?placeid=ChIJESY2ccBypEcRJFXETOkL35Y' },
    { name: 'FF Erfurt-Nord', url: 'https://search.google.com/local/writereview?placeid=ChIJA9C0KWNtpEcR-a1OUYslzcQ' },
    { name: 'FF Eschweiler', url: 'https://search.google.com/local/writereview?placeid=ChIJaz8gNbBhv0cRJNptjjYJb-4' },
    { name: 'FF Freiberg', url: 'https://search.google.com/local/writereview?placeid=ChIJqZZE1gXgCUcRtMnCM1GSS5M' },
    { name: 'FF Freiburg', url: 'https://search.google.com/local/writereview?placeid=ChIJ51uXKlkbkUcR3-MGmk5_YeM' },
    { name: 'FF Freital', url: 'https://search.google.com/local/writereview?placeid=ChIJqVk0_SzFCUcRJERMqOcNZug' },
    { name: 'FF Gera', url: 'https://search.google.com/local/writereview?placeid=ChIJRfQNsVjPpkcRCwPtU1pWc4E' },
    { name: 'FF Gifhorn', url: 'https://search.google.com/local/writereview?placeid=ChIJMZ8PthDvr0cRZDA_ohAA5AI' },
    { name: 'FF Goslar', url: 'https://search.google.com/local/writereview?placeid=ChIJd6Z3wEpBpUcRAm067EL0DS0' },
    { name: 'FF Grimma', url: 'https://search.google.com/local/writereview?placeid=ChIJMaZblTcEp0cR4zpUn_SbfaQ' },
    { name: 'FF Großenhain', url: 'https://search.google.com/local/writereview?placeid=ChIJs-hqjJyAp0cRWgLQ_h_1ezc' },
    { name: 'FF Görlitz', url: 'https://search.google.com/local/writereview?placeid=ChIJY63w7i3cCEcRCbNCTeAuBxE' },
    { name: 'FF Halberstadt', url: 'https://search.google.com/local/writereview?placeid=ChIJXzKXdsWfpUcRoEsh37xledU' },
    { name: 'FF Halle-Neustadt', url: 'https://search.google.com/local/writereview?placeid=ChIJFaQc8JB8pkcRMOAyiugiJyM' },
    { name: 'FF Halle-Ost', url: 'https://search.google.com/local/writereview?placeid=ChIJXT7JQ29jpkcRwvlrJBg0Oeo' },
    { name: 'FF Halle-Süd', url: 'https://search.google.com/local/writereview?placeid=ChIJ9zhR9vVjpkcRr0z4pB9QBiQ' },
    { name: 'FF Hoyerswerda', url: 'https://search.google.com/local/writereview?placeid=ChIJo5XeDP9CCEcR2yMgUSPo98M' },
    { name: 'FF Jena-Drackendorf', url: 'https://search.google.com/local/writereview?placeid=ChIJSRhv9OSupkcRKt3pq6IIt2g' },
    { name: 'FF Jena-West', url: 'https://search.google.com/local/writereview?placeid=ChIJLxxs95WopkcRuU_CJ-CZfjI' },
    { name: 'FF Kamenz', url: 'https://search.google.com/local/writereview?placeid=ChIJ67CwhmpJCEcRJMPGr7kv5S4' },
    { name: 'FF Köthen', url: 'https://search.google.com/local/writereview?placeid=ChIJH7HTIqoMpkcRx3Y5ye8DJag' },
    { name: 'FF Leipzig-Möckern', url: 'https://search.google.com/local/writereview?placeid=ChIJd0Y2snhYpkcRaXyoX-IYghY' },
    { name: 'FF Leipzig-Paunsdorf', url: 'https://search.google.com/local/writereview?placeid=ChIJP885dZr4pkcRm89qZhK7HHY' },
    { name: 'FF Leipzig-Plagwitz', url: 'https://search.google.com/local/writereview?placeid=ChIJ7fyXjpz3pkcRHlk2OpjxwKA' },
    { name: 'FF Leipzig-Stötteritz', url: 'https://search.google.com/local/writereview?placeid=ChIJYWLRulL4pkcRoTs5IrHsuE4' },
    { name: 'FF Magdeburg-Brückfeld', url: 'https://search.google.com/local/writereview?placeid=ChIJXRoW0wlZr0cR4X7a2pFLKwk' },
    { name: 'FF Magdeburg-Neustadt', url: 'https://search.google.com/local/writereview?placeid=ChIJ17-PLDpfr0cRAZzCTlhZH-I' },
    { name: 'FF Meerane', url: 'https://search.google.com/local/writereview?placeid=ChIJJ1tHysknp0cRtGr5lxZY4Ws' },
    { name: 'FF Meißen', url: 'https://search.google.com/local/writereview?placeid=ChIJXZTExaXVCUcRNnnCvku9ohk' },
    { name: 'FF Merseburg', url: 'https://search.google.com/local/writereview?placeid=ChIJSzIm5QyJpkcRNK6Zj__8SuM' },
    { name: 'FF Mühlhausen', url: 'https://search.google.com/local/writereview?placeid=ChIJ1TLXB4yTpEcRZsd9tvzd25Y' },
    { name: 'FF Naumburg', url: 'https://search.google.com/local/writereview?placeid=ChIJj_VWjzeZpkcRss-I3s1bnVI' },
    { name: 'FF Neubrandenburg', url: 'https://search.google.com/local/writereview?placeid=ChIJyUokDOnDq0cRSzWPROMYXPQ' },
    { name: 'FF Nordhausen', url: 'https://search.google.com/local/writereview?placeid=ChIJTcM2cJD_pEcR2kDgQ6JRH-o' },
    { name: 'FF Nürnberg-Maxfeld', url: 'https://search.google.com/local/writereview?placeid=ChIJi1BOEshXn0cR2rQuAasSvnY' },
    { name: 'FF Pirna', url: 'https://search.google.com/local/writereview?placeid=ChIJSzXBmGm5CUcRrEBA3dE1kxg' },
    { name: 'FF Plauen', url: 'https://search.google.com/local/writereview?placeid=ChIJq0KB_RYnoUcRsairuBoUS-s' },
    { name: 'FF Radeberg', url: 'https://search.google.com/local/writereview?placeid=ChIJn8cAHQTKCUcRfgenyDrf7xE' },
    { name: 'FF Radebeul', url: 'https://search.google.com/local/writereview?placeid=ChIJw9cp2ErOCUcRFU1hf8TYD44' },
    { name: 'FF Riesa', url: 'https://search.google.com/local/writereview?placeid=ChIJlx4lf9eCp0cR21pOHljgeAc' },
    { name: 'FF Saalfeld', url: 'https://search.google.com/local/writereview?placeid=ChIJ8SXx-GP9o0cRfowJseYy0GQ' },
    { name: 'FF Sangerhausen', url: 'https://search.google.com/local/writereview?placeid=ChIJxw_rPwg1pEcRUv_Tkl-6n_Q' },
    { name: 'FF Schönebeck', url: 'https://search.google.com/local/writereview?placeid=ChIJ20rbuFz7pUcRI1hFmhgUh2w' },
    { name: 'FF Staßfurt', url: 'https://search.google.com/local/writereview?placeid=ChIJ5RUOp17ppUcRzf9Y5HcPvBg' },
    { name: 'FF Stendal', url: 'https://search.google.com/local/writereview?placeid=ChIJmy-S6bc7r0cRoIkFeXbKiok' },
    { name: 'FF Weimar', url: 'https://search.google.com/local/writereview?placeid=ChIJ6W7j25IbpEcRJn6pmp1h_Rg' },
    { name: 'FF Wernigerode', url: 'https://search.google.com/local/writereview?placeid=ChIJ4R8vNukMpUcRS7-KZ0sOwm8' },
    { name: 'FF Wittenberg', url: 'https://search.google.com/local/writereview?placeid=ChIJkcWa6UMvpkcRyVqbfPzdPLg' },
    { name: 'FF Zeitz', url: 'https://search.google.com/local/writereview?placeid=ChIJE66PQQLDpkcRQi8SB24OwII' },
    { name: 'FF Zwickau-Innenstadt', url: 'https://search.google.com/local/writereview?placeid=ChIJ1yJhU_0tp0cRuEACJcoMYYU' }
  ];

  const handleLocationSelect = (store) => {
    setSelectedLocation(store.name);
    setIsDropdownOpen(false);
    window.open(store.url, '_blank');
  };

  const handleDirectFeedback = () => {
    // Логика для прямого фидбека
    console.log('Direct feedback clicked');
  };

      return (
    <div className="feedback-page">
      {/* Hero секция с изображением */}
      <div className="feedback-hero">
        <div className="hero-image">
          <img 
            src={headerBewertungImage} 
            alt="Freddy Fresh Feedback Hero" 
            className="hero-bg-image"
          />
        </div>
      </div>

      {/* Основной текст */}
      <div className="feedback-main-text">
        <p>
          Wir schätzen Ihr Feedback sehr und würden uns freuen, wenn Sie uns Ihre Rückmeldung über das Feedback-Formular zukommen lassen. Nur über dieses Formular können Sie auch Anhänge, wie Bilder, mit Ihrem Feedback übermitteln.
        </p>
      </div>

             {/* Две секции */}
       <div className="feedback-sections">
         {/* Левая секция - Прямой фидбек */}
         <div className="feedback-direct-section">
           <p>
             Gab es Probleme mit Deiner Bestellung oder hast Du ein Anliegen, welches Du gerne direkt mit uns klären möchtest? Wir melden uns schnellstmöglich bei Dir!
           </p>
           <button className="feedback-btn" onClick={handleDirectFeedback}>
             <span className="envelope-icon">✉</span>
             FEEDBACK
           </button>
         </div>

         {/* Правая секция - Google отзыв */}
         <div className="feedback-google-section">
           {/* Google логотип */}
           <div className="google-logo">
             <img src={googleLogo} alt="Google Logo" className="google-svg" />
           </div>
           <p>
             Möchten Sie uns über Google bewerten? Wählen Sie den entsprechenden Store, und Sie werden automatisch zu Google weitergeleitet.
           </p>
          <div className="selectsStoresField">
            <div 
              className="intro" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedLocation || 'Standort auswählen'}
              <span className="dropdown-arrow">▼</span>
            </div>
            {isDropdownOpen && (
              <ul className="stores">
                {stores.map((store, index) => (
                  <li key={index}>
                    <a 
                      href={store.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLocationSelect(store);
                      }}
                    >
                      {store.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
                 </div>
       </div>
     </div>
   );
};

export default Feedback;
