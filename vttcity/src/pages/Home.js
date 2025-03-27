import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="accueil">
      <div className="hero-section">
        <h1>Bienvenue chez VTT City</h1>
        <p>Le meilleur choix pour vos aventures en VTT</p>
        <Link to="/catalogue" className="cta-button">
          Découvrir nos VTT
        </Link>
      </div>

      <div className="featured-section">
        <h2>Nos VTT populaires</h2>
        <div className="featured-bikes">
          <div className="bike-card">
            <div className="bike-image">  </div>
            <h3>VTT All Mountain Pro</h3>
            <p className="price">45€/jour</p>
            <p>VTT polyvalent pour tous les terrains</p>
            <Link to="/reservation" className="reserve-btn">Réserver</Link>
          </div>

          <div className="bike-card">
            <div className="bike-image"></div>
            <h3>VTT Enduro Elite</h3>
            <p className="price">55€/jour</p>
            <p>VTT performant pour les descentes</p>
            <Link to="/reservation" className="reserve-btn">Réserver</Link>
          </div>

          <div className="bike-card">
            <div className="bike-image"></div>
            <h3>VTT Cross Country</h3>
            <p className="price">35€/jour</p>
            <p>VTT léger pour les longues distances</p>
            <Link to="/reservation" className="reserve-btn">Réserver</Link>
          </div>
        </div>
      </div>

      <div className="services-section">
        <h2>Nos services</h2>
        <div className="services-grid">
          <div className="service-item">
            <div className="service-icon"></div>
            <h3>Location de VTT</h3>
            <p>Large gamme de VTT adaptés à tous les niveaux</p>
          </div>

          <div className="service-item">
            <div className="service-icon"></div>
            <h3>Itinéraires personnalisés</h3>
            <p>Conseils d'experts pour trouver le meilleur parcours</p>
          </div>

          <div className="service-item">
            <div className="service-icon"></div>
            <h3>Livraison</h3>
            <p>Service de livraison des VTT à votre hébergement</p>
          </div>

          <div className="service-item">
            <div className="service-icon"></div>
            <h3>Maintenance</h3>
            <p>Assistance technique pendant toute la durée de votre location</p>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>Ce que disent nos clients</h2>
        <div className="testimonials">
          <div className="testimonial">
            <div className="user-avatar"></div>
            <p className="quote">"Service exceptionnel, VTT en parfait état. Je recommande vivement !"</p>
            <p className="author">- Thomas D.</p>
          </div>

          <div className="testimonial">
            <div className="user-avatar"></div>
            <p className="quote">"Grâce à leurs conseils, j'ai découvert des sentiers magnifiques. À refaire !"</p>
            <p className="author">- Sophie M.</p>
          </div>

          <div className="testimonial">
            <div className="user-avatar"></div>
            <p className="quote">"Rapport qualité-prix imbattable. Équipe très professionnelle."</p>
            <p className="author">- Marc L.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;