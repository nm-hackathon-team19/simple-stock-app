const express = require('express');
const router = express.Router();
const pool = require('../db')

router.post('/register', async (req, res) => {
  try {
    const { user, email, password } = req.body;

    const userSelected = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);
    if (userSelected.rows.length > 0) {
      return res.status(401).json("User already exists!");
    };

    const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", [user, email, password]);
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error('error from server- create new holding', err.message);
  }
});

router.get('/login', async (req, res) => {
  try {
    const { email, password } = req.query

    const user = await pool.query("SELECT * FROM users WHERE user_email = ($1)", [email]);

    // check if user exist
    if (user.rows.length === 0) {
      return res.status(401).json("User doesn't exists!");
    };
    // check passwords match http request and db
    if (user.rows[0].user_password !== password) {
      return res.status(401).json("Password don't match");
    };

    res.json(user.rows[0].user_id);

  } catch (err) {
    console.error('error from server- create new holding', err.message);
  }
});



module.exports = router;