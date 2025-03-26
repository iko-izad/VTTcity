import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Fermer le menu hamburger si l'écran est redimensionné
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);
  
  // Fermer le menu quand on clique sur un lien
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <span>VTT City</span>
        </Link>
      </div>
      
      <button 
        className={`hamburger ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Accueil
          </Link>
        </li>
        <li>
          <Link 
            to="/apropos" 
            className={location.pathname === '/apropos' ? 'active' : ''}
          >
            À propos
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link 
            to="/connexion" 
            className="connexion-btn"
          >
            Connexion
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;