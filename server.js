const express = require('express')
const app = express();
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 5000;
const pool = require('./db')
// Set my buildb  as a static folder.
// We just need to put the files in buils and it'll work
app.use('/', express.static(path.join(__dirname, 'client/build')));
app.use(express.json()) // to get data from the client side we need to use req.body and this allows us to access the req.body and get json data.

// DB ROUTES \\
// get all holdings
app.get('/trade', async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM holdings");
    res.json(response.rows);
  } catch (err) {
    2
    console.error(err.message);
  }
})

// get a holding
app.get('/trade/:id', async (req, res) => {
  try {
    const { id } = req.params
    const response = await pool.query("SELECT * FROM holdings WHERE holding_id = ($1)", [id])
    res.json(response.rows[0]);
  } catch (err) {
    console.log(err.message)
  }
})

// create new holding
app.post('/trade', async (req, res) => {
  try {
    const { company, symbol, share_number, total_money, share_price } = req.body;
    const newHolding = await pool.query("INSERT INTO holdings (company, symbol, share_number, total_money, share_price) VALUES ($1, $2, $3, $4, $5) RETURNING *", [company, symbol, share_number, total_money, share_price]);

    res.json(newHolding.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

// update existing holding
app.put('/trade/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { share_number, total_money } = req.body;
    const updatedHolding = await pool.query("UPDATE holdings SET share_number = $1, total_money = $2 WHERE holding_id = $3 RETURNING *", [share_number, total_money, id])
    res.json(updatedHolding.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

// delete existing holding
app.delete('/trade/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHolding = await pool.query("DELETE FROM holdings WHERE holding_id = $1", [id]);
    res.send(`successfully deleted holding id: ${id}`);
  } catch (err) {
    console.error(err.message);
  }
})

// API ROUTES \\
app.get('/api/stocks/search', (req, res) => {
  const symbol = req.query.symbol
  console.log(symbol)
  axios.get(`https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbol}&types=quote&token=pk_e187f175e42d4ac89045179e525ef0e5`)
    .then(response => {
      res.send(response.data[Object.keys(response.data)[0]].quote)
    })
    .catch(error => {
      console.log(error)
    })
})

app.get('/api/stocks/recommendation', (req, res) => {
  const companies = []
  axios.get('https://cloud.iexapis.com/stable/stock/market/batch?symbols=msft,nflx&types=quote&token=pk_e187f175e42d4ac89045179e525ef0e5')
    .then(function (response) {
      console.log(response.data)
      Object.keys(response.data).forEach(function (key) {
        companies.push(response.data[key].quote)
      })
      res.json(companies)
    })
    .catch(function (err) {
      console.log(err)
    })
})

app.get("/*", (req, res) => { res.sendFile(path.join(__dirname, "client", "build", "index.html")); });

app.listen(port, () => console.log(`Running on port: ${port}`))