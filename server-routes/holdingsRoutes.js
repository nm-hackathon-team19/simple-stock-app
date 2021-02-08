const express = require('express');
const router = express.Router();
const pool = require('../database/db');

// get holdings
router.get('/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;
    const response = await pool.query(
      'SELECT * FROM holdings WHERE user_id = ($1)',
      [user_id]
    );

    holdings = response.rows;

    holdings.forEach((item, index) => {
      holdings[index].created_at = holdings[index].created_at
        .toString()
        .substring(0, 24);
    });

    res.json(holdings);
  } catch (err) {
    console.error('error from server- get all holdings', err.message);
    res.status(500).json({
      errorMessage: 'Something went wrong on the server. Please try again.',
    });
  }
});

// create holding
router.post('/', async (req, res) => {
  try {
    const { name, symbol, shares, changePercent, price, user_id } = req.body;
    const newHolding = await pool.query(
      'INSERT INTO holdings (name, symbol, shares, percent_change, price, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, symbol, shares, changePercent, price, user_id]
    );
    res.json(newHolding.rows[0]);
  } catch (err) {
    console.error('error from server- create new holding', err.message);
    res.status(500).json({
      errorMessage: 'Something went wrong on the server. Please try again.',
    });
  }
});

router.post('/buy', async (req, res) => {
  console.log('req.body: ', req.body);
  const { user_id, holding, shares } = req.body;
  const { companyName, symbol, latestPrice, changePercent } = holding;

  try {
    const response = await pool.query(
      'SELECT * FROM holdings WHERE symbol = ($1) AND user_id = $2',
      [symbol, user_id]
    );

    const matchingHolding = response.rows.length > 0;

    if (matchingHolding) {
      const updatedShares =
        parseInt(response.rows[0].shares) + parseInt(shares);

      // update holding
      const updatedHolding = await pool.query(
        'UPDATE holdings SET shares = $1, price = $2 WHERE holding_id = $3 RETURNING *',
        [updatedShares, latestPrice, response.rows[0].holding_id]
      );

      res.json(updatedHolding.rows[0]);
    } else {
      // create new holding
      const newHolding = await pool.query(
        `INSERT INTO holdings (name, symbol, shares, percent_change, price, user_id) 
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [companyName, symbol, shares, changePercent, latestPrice, user_id]
      );
      res.json(newHolding.rows[0]);
    }
  } catch (err) {
    console.error('error from server- create new holding', err.message);
    res.status(500).json({
      errorMessage: 'Something went wrong on the server. Please try again.',
    });
  }
});

router.post('/sell', async (req, res) => {
  console.log('req.body: ', req.body);
  const { user_id, holding, shares } = req.body;
  const { symbol, latestPrice } = holding;

  try {
    const response = await pool.query(
      'SELECT * FROM holdings WHERE symbol = ($1) AND user_id = $2',
      [symbol, user_id]
    );

    const matchingHolding = response.rows.length > 0;

    if (!matchingHolding) {
      return res
        .status(404)
        .json({ errorMessage: 'cannot find selected holding' });
    }

    const updatedShares = parseInt(response.rows[0].shares) - parseInt(shares);

    if (updatedShares === 0) {
      // remove holding row
      const deletedHolding = await pool.query(
        'DELETE FROM holdings WHERE holding_id = $1',
        [response.rows[0].holding_id]
      );
    } else {
      // update holding
      const updatedHolding = await pool.query(
        'UPDATE holdings SET shares = $1, price = $2 WHERE holding_id = $3 RETURNING *',
        [updatedShares, latestPrice, response.rows[0].holding_id]
      );
    }

    res.json(updatedHolding.rows[0]);
  } catch (err) {
    console.error('error from server- create new holding', err.message);
    res.status(500).json({
      errorMessage: 'Something went wrong on the server. Please try again.',
    });
  }
});

// update existing holding
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { shares } = req.body;
    const updatedHolding = await pool.query(
      'UPDATE holdings SET shares = $1 WHERE holding_id = $2 RETURNING *',
      [shares, id]
    );
    res.json(updatedHolding.rows[0]);
  } catch (err) {
    console.error('error from server- update holding', err.message);
    res.status(500).json({
      errorMessage: 'Something went wrong on the server. Please try again.',
    });
  }
});

// delete existing holding
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHolding = await pool.query(
      'DELETE FROM holdings WHERE holding_id = $1',
      [id]
    );
    res.send(`successfully deleted holding id: ${id}`);
  } catch (err) {
    console.error('error from server- delete holdings', err.message);
    res.status(500).json({
      errorMessage: 'Something went wrong on the server. Please try again.',
    });
  }
});

module.exports = router;
