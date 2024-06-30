import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;
