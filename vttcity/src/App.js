import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Formulaire from './pages/Formulaire';
import Apropos from './pages/Apropos';
import './App.css';
// develop branch

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Home/>
        <Apropos/>
        <Formulaire />
      </div>
    </Router>
  );
};

export default App;