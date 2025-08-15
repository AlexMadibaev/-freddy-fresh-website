import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Заглушка для логина
      const response = await axios.post('/api/auth/login', formData);
      
      if (response.data.success) {
        alert('Anmeldung erfolgreich! (Заглушка)');
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Anmeldung fehlgeschlagen. Bitte versuchen Sie es erneut.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-content">
          <h1>Anmelden</h1>
          <p className="auth-subtitle">Melden Sie sich in Ihrem Freddy Fresh Konto an</p>
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="ihre.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Passwort</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Ihr Passwort"
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary auth-btn"
              disabled={loading}
            >
              {loading ? 'Wird angemeldet...' : 'Anmelden'}
            </button>
          </form>
          
          <div className="auth-links">
            <p>
              Noch kein Konto?{' '}
              <Link to="/register" className="auth-link">
                Jetzt registrieren
              </Link>
            </p>
            <p>
              <Link to="/forgot-password" className="auth-link">
                Passwort vergessen?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
