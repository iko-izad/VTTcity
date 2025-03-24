
CREATE DATABASE location_vtt;


USE location_vtt;


CREATE TABLE utilisateurs (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    numero INT,              -- Nouveau champ pour le numéro
    adresse_postal VARCHAR(255) -- Nouveau champ pour l'adresse postale
);



CREATE TABLE sorties (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    titre VARCHAR(255) NOT NULL,  -- Nouveau champ pour le titre de la sortie
    description TEXT,             -- Nouveau champ pour la description
    date_sortie DATE NOT NULL,    -- Nouveau champ pour la date de la sortie
    prix DECIMAL(10, 2) NOT NULL  -- Nouveau champ pour le prix
);



CREATE TABLE reservations (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    utilisateur_id INT,
    sortie_id INT,
    date_reservation DATETIME,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (sortie_id) REFERENCES sorties(id)
);



INSERT INTO sorties (titre, description, date_sortie, prix)
VALUES
('Sortie VTT en forêt', 'Découvrez la forêt de Fontainebleau lors d\'une sortie VTT de 3 heures. Parcours adapté à tous les niveaux.', '2025-04-05', 25.00);



