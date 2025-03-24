import React from 'react';

const Menu = () => {
  return (
    <div className="menu">
      <h2>Notre Carte</h2>
      <div className="menu-items">
        <div className="menu-item">
          <h3>Entrées</h3>
          <p>Salade César - 8€</p>
          <p>Soupe du jour - 6€</p>
        </div>
        <div className="menu-item">
          <h3>Plats</h3>
          <p>Steak Frites - 15€</p>
          <p>Poisson du jour - 18€</p>
        </div>
      </div>
    </div>
  );
};

export default Menu; 