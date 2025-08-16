import React, { useState, useEffect, useMemo } from 'react';
import './Menu.css';
import americanMeatball from '../american_meatball.webp';
import blaetterteigsticks from '../blaetterteigsticks_nuss_nougat.webp';
import cocaCola from '../coca_cola_10l.webp';
import crispyChicken from '../crispy_chicken.webp';
import palermo from '../palermo.webp';
import pastaBolognese from '../pasta_bolognese.webp';
import salatBeachparty from '../salat_beachparty.webp';
import roestisticks from '../roestisticks.webp';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('aktion');

  const categories = useMemo(() => [
    { id: 'aktion', name: 'AKTION %' },
    { id: 'pizza', name: 'PIZZA' },
    { id: 'burger', name: 'BURGER' },
    { id: 'snacks', name: 'SNACKS' },
    { id: 'salate', name: 'SALATE' },
    { id: 'pasta', name: 'PASTA' },
    { id: 'desserts', name: 'EIS & DESSERTS' },
    { id: 'getranke', name: 'GETRÄNKE' }
  ], []);

  const filters = useMemo(() => [
    { id: 'lactose', name: 'Lactosefrei (<0.1%)', icon: '🥛', color: 'red' },
    { id: 'new', name: 'Neu bei Freddy', icon: '⭐', color: 'red' },
    { id: 'vegetarian', name: 'Vegetarisch', icon: '🌱', color: 'red' },
    { id: 'spicy', name: 'scharf', icon: '🔥', color: 'black' },
    { id: 'vegan', name: 'vegan', icon: '🌿', color: 'black' }
  ], []);

  const menuItems = useMemo(() => ({
    aktion: [
      { id: 1, name: 'AMERICAN MEATBALL', description: 'mit Käse-Sahne-Soße, karamellisierten Zwiebeln, Meatballs, Freddys Gouda-Mozzarella-Mix, Baconstreifen und frischer Zwiebellauch', price: 16.99, image: americanMeatball, discount: '20%', filters: ['new'] },
      { id: 2, name: 'CRISPY CHICKEN', description: 'Knuspriges Hähnchen mit Salat, Tomate, Mayo', price: 9.99, image: crispyChicken, discount: '30%', filters: ['spicy'] },
      { id: 3, name: 'PALERMO', description: 'mit Pizzasoße, Salami, Freddys Gouda-Mozzarella-Mix', price: 12.99, image: palermo, discount: '25%' }
    ],
    pizza: [
      { id: 4, name: 'AMERICAN MEATBALL', description: 'mit Käse-Sahne-Soße, karamellisierten Zwiebeln, Meatballs, Freddys Gouda-Mozzarella-Mix, Baconstreifen und frischer Zwiebellauch', price: 16.99, image: americanMeatball, filters: ['new'] },
      { id: 5, name: 'PALERMO', description: 'mit Pizzasoße, Salami, Freddys Gouda-Mozzarella-Mix', price: 12.99, image: palermo },
      { id: 6, name: 'HAWAII', description: 'mit Pizzasoße, Schinken, Ananas, Freddys Gouda-Mozzarella-Mix', price: 13.99, image: americanMeatball },
      { id: 7, name: 'MARGHERITA', description: 'mit Pizzasoße, Freddys Gouda-Mozzarella-Mix, Basilikum', price: 11.99, image: palermo, filters: ['vegetarian'] },
      { id: 8, name: 'FUNGHI', description: 'mit Pizzasoße, Champignons, Freddys Gouda-Mozzarella-Mix', price: 12.99, image: americanMeatball, filters: ['vegetarian'] },
      { id: 9, name: 'TONNO', description: 'mit Pizzasoße, Thunfisch, Zwiebeln, Freddys Gouda-Mozzarella-Mix', price: 13.99, image: palermo }
    ],
    burger: [
      { id: 10, name: 'CLASSIC BURGER', description: '100% Rindfleisch, Salat, Tomate, Zwiebeln, Käse', price: 9.99, image: crispyChicken },
      { id: 11, name: 'CHEESEBURGER', description: '100% Rindfleisch, Käse, Salat, Tomate, Zwiebeln', price: 10.99, image: crispyChicken },
      { id: 12, name: 'CHICKEN BURGER', description: 'Hähnchenbrust, Salat, Tomate, Mayo', price: 9.99, image: crispyChicken },
      { id: 13, name: 'BBQ BURGER', description: '100% Rindfleisch, BBQ Sauce, Zwiebeln, Käse', price: 11.99, image: crispyChicken, filters: ['spicy'] }
    ],
    snacks: [
      { id: 14, name: 'POMMES FRITES', description: 'Knusprige Pommes mit Ketchup und Mayo', price: 4.99, image: roestisticks },
      { id: 15, name: 'CHICKEN NUGGETS', description: 'Knusprige Hähnchennuggets mit Ketchup', price: 7.99, image: crispyChicken },
      { id: 16, name: 'CHICKEN WINGS', description: 'Knusprige Hähnchenflügel mit BBQ Sauce', price: 8.99, image: crispyChicken },
      { id: 17, name: 'MOZZARELLA STICKS', description: 'Knusprige Mozzarella Sticks mit Marinara', price: 6.99, image: roestisticks }
    ],
    salate: [
      { id: 18, name: 'CAESAR SALAT', description: 'Salat mit Hähnchen, Croutons, Parmesan, Caesar Dressing', price: 9.99, image: salatBeachparty },
      { id: 19, name: 'GEMISCHTER SALAT', description: 'Frischer Salat mit Tomaten, Gurken, Zwiebeln', price: 7.99, image: salatBeachparty, filters: ['vegetarian'] },
      { id: 20, name: 'THUNFISCH SALAT', description: 'Salat mit Thunfisch, Eiern, Tomaten, Zwiebeln', price: 10.99, image: salatBeachparty }
    ],
    pasta: [
      { id: 21, name: 'SPAGHETTI CARBONARA', description: 'Spaghetti mit Speck, Ei, Parmesan, Sahne', price: 12.99, image: pastaBolognese },
      { id: 22, name: 'SPAGHETTI BOLOGNESE', description: 'Spaghetti mit Rindfleisch-Tomatensauce', price: 11.99, image: pastaBolognese },
      { id: 23, name: 'PENNE ARRABIATA', description: 'Penne mit scharfer Tomatensauce, Knoblauch, Chili', price: 10.99, image: pastaBolognese }
    ],
    desserts: [
      { id: 24, name: 'TIRAMISU', description: 'Klassisches italienisches Tiramisu mit Mascarpone', price: 6.99, image: blaetterteigsticks },
      { id: 25, name: 'SCHOKO MUFFIN', description: 'Schokoladiger Muffin mit Schokostückchen', price: 3.99, image: blaetterteigsticks },
      { id: 26, name: 'BEN & JERRY\'S', description: 'Vanilleeis mit Cookie Dough Stückchen', price: 4.99, image: blaetterteigsticks }
    ],
    getranke: [
      { id: 27, name: 'COCA-COLA', description: 'Erfrischende Coca-Cola 330ml', price: 2.99, image: cocaCola },
      { id: 28, name: 'FANTA', description: 'Erfrischende Fanta Orange 330ml', price: 2.99, image: cocaCola },
      { id: 29, name: 'WASSER', description: 'Stilles Wasser 500ml', price: 1.99, image: cocaCola },
      { id: 30, name: 'BIER', description: 'Bier 330ml', price: 3.99, image: cocaCola }
    ]
  }), []);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    
    // Находим элемент секции
    const element = document.getElementById(categoryId);
    
    if (element) {
      // Прокручиваем к элементу с отступом для sticky навигации
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Отслеживаем активную секцию при прокрутке
  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 150; // Отступ для sticky навигации

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveCategory(categories[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories]);

  return (
    <div className="menu-page">
      <div className="menu-filters">
        <div className="filters-container">
          {console.log('Filters:', filters)}
          {filters && filters.length > 0 ? filters.map((filter) => (
            <div key={filter.id} className={`filter-item ${filter.color}`}>
              <span className="filter-icon">{filter.icon}</span>
              <span className="filter-text">{filter.name}</span>
            </div>
          )) : <div>No filters found</div>}
        </div>
      </div>

      <div className="menu-navigation">
        <div className="nav-container">
          {console.log('Categories:', categories)}
          {categories && categories.length > 0 ? categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className={`nav-category ${activeCategory === category.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick(category.id);
              }}
            >
              {category.name}
            </a>
          )) : <div>No categories found</div>}
        </div>
      </div>
      
      <div className="menu-content">
        {categories.map((category) => (
          <section key={category.id} id={category.id} className="menu-section">
            <div className="container">
              <h2 className="section-title">{category.name}</h2>
              <div className="section-subtitle">MADE BY FREDDY</div>
              <div className="products-grid">
                {menuItems[category.id]?.map((item) => (
                  <div key={item.id} className="product-card">
                    <div className="card-header">
                      <h3 className="product-name">{item.name}</h3>
                      <div className="info-icon">ℹ️</div>
                    </div>
                    {item.filters && item.filters.length > 0 && (
                      <div className="product-filters">
                        {item.filters.map((filterId) => {
                          const filter = filters.find(f => f.id === filterId);
                          return filter ? (
                            <span key={filterId} className={`product-filter ${filter.color}`}>
                              <span className="filter-icon">{filter.icon}</span>
                              <span className="filter-text">{filter.name}</span>
                            </span>
                          ) : null;
                        })}
                      </div>
                    )}
                    <div className="product-image">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="product-img"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="product-description">{item.description}</div>
                    <button className="order-button">JETZT BESTELLEN</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Menu;
