import React, { useState } from 'react';
import  './styles/formulaire.css';

const Inscription = () => {
  const [formData, setFormData] = useState({
    email: '',
    mot_de_passe: '',
    nom: '',
    prenom: '',
    numero: '',
    adresse_postal: ''
  });
  const [status, setStatus] = useState({ message: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/utilisateurs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ message: 'Inscription réussie !', type: 'success' });
        setFormData({
          email: '', mot_de_passe: '', nom: '', 
          prenom: '', numero: '', adresse_postal: ''
        });
      } else {
        const data = await response.json();
        setStatus({ message: data.message || 'Erreur lors de l\'inscription', type: 'error' });
      }
    } catch (err) {
      setStatus({ message: 'Erreur de connexion au serveur', type: 'error' });
    }
  };

  const formFields = [
    { name: 'email', type: 'email', label: 'Email *', required: true },
    { name: 'mot_de_passe', type: 'password', label: 'Mot de passe *', required: true, minLength: 8 },
    { name: 'nom', type: 'text', label: 'Nom *', required: true },
    { name: 'prenom', type: 'text', label: 'Prénom *', required: true },
    { name: 'numero', type: 'tel', label: 'Numéro de téléphone' },
    { name: 'adresse_postal', type: 'text', label: 'Adresse postale' }
  ];

  return (
    <div className="inscription-container">
      <h2>Se connecter</h2>
      {status.message && (
        <div className={`${status.type}-message`}>{status.message}</div>
      )}

      <form onSubmit={handleSubmit} className="inscription-form">
        {formFields.map(field => (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={e => setFormData({...formData, [field.name]: e.target.value})}
              required={field.required}
              minLength={field.minLength}
              placeholder={`Votre ${field.name.replace('_', ' ')}`}
            />
          </div>
        ))}
        <button type="submit" className="submit-btn">S'inscrire</button>
      </form>
    </div>
  );
};

export default Inscription;