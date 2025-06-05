import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import Logo from './images/vttlogo.webp';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={Logo} alt="VTT City" />
      </Link>
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/apropos">À propos</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/inscription" className="btn-inscription">S'inscrire</Link>
      </div>
    </nav>
  );
};

export default Navbar;