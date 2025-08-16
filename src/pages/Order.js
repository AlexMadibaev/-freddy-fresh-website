// Order component - исправлены ESLint ошибки
import React, { useState } from 'react';
import axios from 'axios';
import './Order.css';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card',
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });

  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Заглушка для товаров в корзине
  const [cartItems] = useState([
    { id: 1, name: 'Pizza Margherita', price: 12.99, quantity: 1 },
    { id: 2, name: 'Pizza Rotterdam', price: 15.99, quantity: 1 }
  ]);

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Автодополнение для адреса
    if (name === 'address' && value.length > 2) {
      fetchAddressSuggestions(value);
    } else if (name === 'address') {
      setAddressSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const fetchAddressSuggestions = async (query) => {
    try {
      const response = await axios.get(`/api/addresses/autocomplete?q=${query}`);
      setAddressSuggestions(response.data.addresses);
      setShowSuggestions(true);
    } catch (error) {
      console.error('Error fetching address suggestions:', error);
    }
  };

  const selectAddress = (address) => {
    setFormData(prev => ({
      ...prev,
      address: address
    }));
    setShowSuggestions(false);
  };

  const handlePaymentMethodChange = (method) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: method
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (formData.paymentMethod === 'card') {
        // Проверяем, заполнены ли данные карты
        if (!formData.cardNumber || !formData.cardHolder || !formData.expiryDate || !formData.cvv) {
          alert('Bitte füllen Sie alle Kreditkartendaten aus.');
          setLoading(false);
          return;
        }

        // Отправляем платеж картой
        await axios.post('/api/payment/card', {
          cardNumber: formData.cardNumber,
          cardHolder: formData.cardHolder,
          expiryDate: formData.expiryDate,
          cvv: formData.cvv,
          amount: total
        });
      } else if (formData.paymentMethod === 'paypal') {
        // Редирект на PayPal
        const response = await axios.post('/api/payment/paypal');
        if (response.data.redirectUrl) {
          window.location.href = response.data.redirectUrl;
          return;
        }
      }

      // Создаем заказ
      await axios.post('/api/orders', {
        items: cartItems,
        address: `${formData.address}, ${formData.city} ${formData.zipCode}`,
        paymentMethod: formData.paymentMethod,
        total: total
      });

      setOrderSuccess(true);
    } catch (error) {
      console.error('Error processing order:', error);
      alert('Es gab einen Fehler bei der Bestellung. Bitte versuchen Sie es erneut.');
    } finally {
      setLoading(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="order-success">
        <div className="container">
          <div className="success-content">
            <h2>Bestellung erfolgreich!</h2>
            <p>Vielen Dank für Ihre Bestellung. Sie erhalten eine Bestätigung per E-Mail.</p>
            <button 
              className="btn btn-primary"
              onClick={() => window.location.href = '/'}
            >
              Zurück zur Startseite
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-page">
      <div className="container">
        <h1 className="page-title">Bestellung aufgeben</h1>
        
        <div className="order-content">
          <div className="order-form-section">
            <h2>Lieferadresse</h2>
            <form onSubmit={handleSubmit} className="order-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Adresse *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Straße und Hausnummer"
                />
                {showSuggestions && addressSuggestions.length > 0 && (
                  <ul className="address-suggestions">
                    {addressSuggestions.map((address, index) => (
                      <li key={index} onClick={() => selectAddress(address)}>
                        {address}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">Stadt *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">PLZ *</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <h2>Zahlungsmethode</h2>
              <div className="payment-methods">
                <label className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={() => handlePaymentMethodChange('card')}
                  />
                  <span>Kreditkarte</span>
                </label>
                <label className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={() => handlePaymentMethodChange('paypal')}
                  />
                  <span>PayPal</span>
                </label>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="card-details">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="cardNumber">Kartennummer *</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="cardHolder">Karteninhaber *</label>
                      <input
                        type="text"
                        id="cardHolder"
                        name="cardHolder"
                        value={formData.cardHolder}
                        onChange={handleInputChange}
                        placeholder="Max Mustermann"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="expiryDate">Ablaufdatum *</label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        maxLength="5"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cvv">CVV *</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength="4"
                      />
                    </div>
                  </div>
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={loading}
              >
                {loading ? 'Wird verarbeitet...' : `Jetzt bestellen (${total.toFixed(2)} €)`}
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h2>Ihre Bestellung</h2>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>Menge: {item.quantity}</p>
                  </div>
                  <div className="item-price">
                    {(item.price * item.quantity).toFixed(2)} €
                  </div>
                </div>
              ))}
            </div>
            <div className="order-total">
              <h3>Gesamt: {total.toFixed(2)} €</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
