const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3002;

// Middleware
app.use(cors());
app.use(express.json());


// Tester la connexion
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion:', err);
    return;
  }
  console.log('Connecté à la base de données location_vtt');
});

// Routes pour les utilisateurs
app.post('/api/utilisateurs', (req, res) => {
  const { email, mot_de_passe, nom, prenom, numero, adresse_postal } = req.body;
  
  db.query(
    "INSERT INTO utilisateurs (email, mot_de_passe, nom, prenom, numero, adresse_postal) VALUES (?, ?, ?, ?, ?, ?)",
    [email, mot_de_passe, nom, prenom, numero, adresse_postal],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur d'inscription" });
        return;
      }
      res.status(201).json({ id: result.insertId, message: "Inscription réussie" });
    }
  );
});

// Routes pour les sorties
app.get('/api/sorties', (req, res) => {
  db.query("SELECT * FROM sorties", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de la récupération des sorties" });
      return;
    }
    res.json(result);
  });
});

app.get('/api/sorties/:id', (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM sorties WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de la récupération de la sortie" });
      return;
    }
    res.json(result[0]);
  });
});

// Routes pour les réservations
app.post('/api/reservations', (req, res) => {
  const { utilisateur_id, sortie_id } = req.body;
  const date_reservation = new Date();

  db.query(
    "INSERT INTO reservations (utilisateur_id, sortie_id, date_reservation) VALUES (?, ?, ?)",
    [utilisateur_id, sortie_id, date_reservation],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur lors de la réservation" });
        return;
      }
      res.status(201).json({ 
        id: result.insertId, 
        message: "Réservation effectuée avec succès" 
      });
    }
  );
});

// Récupérer les réservations d'un utilisateur
app.get('/api/reservations/utilisateur/:id', (req, res) => {
  const utilisateur_id = req.params.id;
  
  db.query(
    `SELECT r.*, s.titre, s.date_sortie, s.prix 
     FROM reservations r 
     JOIN sorties s ON r.sortie_id = s.id 
     WHERE r.utilisateur_id = ?`,
    [utilisateur_id],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur lors de la récupération des réservations" });
        return;
      }
      res.json(result);
    }
  );
});

// Supprimer une réservation
app.delete('/api/reservations/:id', (req, res) => {
  const id = req.params.id;
  
  db.query("DELETE FROM reservations WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de la suppression de la réservation" });
      return;
    }
    res.json({ message: "Réservation supprimée avec succès" });
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});