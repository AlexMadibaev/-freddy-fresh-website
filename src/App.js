import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Login from './pages/Login';
import Register from './pages/Register';
import Stores from './pages/Stores';
import Aktion from './pages/Aktion';
import Feedback from './pages/Feedback';
import Jobs from './pages/Jobs';
import Qualitaet from './pages/Qualitaet';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/aktion" element={<Aktion />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/jobposting" element={<Jobs />} />
        <Route path="/qualitaet" element={<Qualitaet />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
