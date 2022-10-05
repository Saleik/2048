import mysql from 'mysql';
import config from './config/config.js';

const db = mysql.createConnection(config);
db.connect((err) => {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
  db.query("CREATE DATABASE 2048_database", (err, result)=> {
    if (err) throw err;
    console.log("Base de données créée !");
  })
});
