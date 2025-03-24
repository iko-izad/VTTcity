import React, { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    nom: '',
    date: '',
    personnes: '2'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Réservation:', formData);
  };

  return (
    <div className="reservation">
      <h2>Réserver une table</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Votre nom"
          value={formData.nom}
          onChange={(e) => setFormData({...formData, nom: e.target.value})}
        />
        <input
          type="date"
          placeholder="Date de réservation"
          value={formData.date}
          onChange={(e) => setFormData({...formData, date: e.target.value})}
        />
        <input
          type="number"
          placeholder="Nombre de personnes"
          value={formData.personnes}
          onChange={(e) => setFormData({...formData, personnes: e.target.value})}
        />
        <button type="submit">Réserver</button>
      </form>
    </div>
  );
};

export default Reservation; 