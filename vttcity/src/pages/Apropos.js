import React from 'react';
import './styles/apropos.css';

const Apropos = () => {
  return (
    <div className="apropos">
      <div className="apropos-header">
        <h1>À propos de VTT City</h1>
        <p>Découvrez notre passion pour le VTT et notre engagement envers la qualité</p>
      </div>
      
      <div className="apropos-content">
        <div className="apropos-section">
          <h2>Notre Histoire</h2>
          <p>
            Fondée en 2020, VTT City est née de la passion de trois amis cyclistes qui souhaitaient 
            partager leur amour du VTT avec le plus grand nombre. Notre entreprise a commencé avec 
            seulement 10 vélos et s'est développée pour offrir aujourd'hui plus de 100 VTT de qualité.
          </p>
        </div>
        
        <div className="apropos-section">
          <h2>Notre Mission</h2>
          <p>
            Chez VTT City, notre mission est de rendre l'aventure accessible à tous. Nous croyons que 
            chacun devrait pouvoir profiter des sensations exceptionnelles qu'offre le VTT, quels que 
            soient son niveau d'expérience ou son budget.
          </p>
        </div>
        
        <div className="apropos-section">
          <h2>Nos Valeurs</h2>
          <ul>
            <li><strong>Qualité</strong> - Nous ne proposons que des VTT de haute qualité, entretenus avec soin</li>
            <li><strong>Service</strong> - Nous offrons un conseil personnalisé à chaque client</li>
            <li><strong>Responsabilité</strong> - Nous nous engageons pour une pratique respectueuse de l'environnement</li>
            <li><strong>Passion</strong> - Notre équipe est composée de passionnés de VTT</li>
          </ul>
        </div>
        
        <div className="team-section">
          <h2>Notre Équipe</h2>
          <div className="team-members">
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Thomas Dupont</h3>
              <p>Fondateur & Directeur</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Marie Leroy</h3>
              <p>Responsable Technique</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Lucas Martin</h3>
              <p>Responsable Client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;