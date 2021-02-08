const express = require('express');
const router = express.Router();
const pool = require('../database/db');

router.get('/wallet/:user_id', async (req, res) => {
  try {
    const wallet = 10000;
    let holdingsAmount = 0;
    const { user_id } = req.params;
    const response = await pool.query(
      'SELECT * FROM holdings WHERE user_id = ($1)',
      [user_id]
    );
    for (const element of response.rows) {
      holdingsAmount += element.shares * element.price;
    }
    res.json({ wallet: wallet - holdingsAmount, holdingsAmount });
  } catch (err) {
    console.error(
      'error from server- get wallet and holdings amount',
      err.message
    );
    res.status(500).json({
      errorMessage: 'Something went wrong on the server. Please try again.',
    });
  }
});

module.exports = router;
