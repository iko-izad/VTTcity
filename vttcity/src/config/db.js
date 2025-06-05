
const mysql = require('mysql2');
// Configuration de la base de données
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Izad97640",
  database: "location_vtt"
});

module.exports = db;