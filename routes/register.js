const express = require('express');
const app = express();
const bcrypt=require('bcrypt');
const connection=require('../connection')
const router = express.Router();
app.post('/register', (req, res) => {
    const { id,username,email,password} = req.body;
  
    // Encrypt the password
    bcrypt.hash(password, 10, (error, hashedPassword) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'err agaya' });
        return;
      }
      // Insert the user into the database
      const sql = `INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)`;
      connection.query(sql, [id, username,email, password], (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'register failes' });
        } else {
          res.status(200).json({ message: 'User registered !!' });
        }
      });
    });
  });
  module.exports = router;