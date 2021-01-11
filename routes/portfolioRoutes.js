const express = require('express');
const router = express.Router();
const pool = require('../db')

router.get('/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params
    const userName = await pool.query("SELECT user_name FROM users WHERE user_id = ($1)", [user_id]);
    res.send(userName.rows[0].user_name);
  } catch (err) {
    console.error('error from server- get user name', err.message);
  }
})

router.get('/wallet/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params
    const response = await pool.query("SELECT * FROM holdings WHERE user_id = ($1)", [user_id]);
    res.json(response.rows);
  } catch (err) {
    console.error('error from server- get all holdings', err.message);
  }
})

module.exports = router;