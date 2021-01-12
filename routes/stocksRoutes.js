const express = require('express');
const router = express.Router();
const pool = require('../db')

// get holdings
router.get('/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params
    const response = await pool.query("SELECT * FROM holdings WHERE user_id = ($1)", [user_id]);
    res.json(response.rows);
  } catch (err) {
    console.error('error from server- get all holdings', err.message);
  }
})

// router.get('/search', (req, res) => {
//   const symbol = req.query.symbol
//   console.log(symbol)
//   axios.get(`https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbol}&types=quote&token=pk_e187f175e42d4ac89045179e525ef0e5`)
//     .then(response => {
//       res.send(response.data[Object.keys(response.data)[0]].quote)
//     })
//     .catch(error => {
//       console.log('error from server- API routes', error)
//     })
// })


module.exports = router;