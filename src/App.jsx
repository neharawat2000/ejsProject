import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import "animate.css/animate.min.css";

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import GetStartedForm from './Pages/GetStartedForm/GetStartedForm';
import BoardMember from './Components/BoardMember/BoardMember';
import Owner from './Components/Owner/Owner';
import Renter from './Components/Renter/Renter';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/get-started" element={<GetStartedForm/>} />
        <Route path="/get-started/board-member" element={<BoardMember/>} />
        <Route path="/get-started/owner" element={<Owner/>} />
        <Route path="/get-started/renter" element={<Renter/>} />
        
      </Routes>
  );
}

export default App;
