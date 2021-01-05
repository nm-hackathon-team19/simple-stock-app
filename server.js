const express = require('express')
const app = express();
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 5000;
const pool = require('./db')
const tradeRoutes = require('./routes/tradeRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');

// Set my buildb  as a static folder.
// We just need to put the files in buils and it'll work
app.use('/', express.static(path.join(__dirname, 'client/build')));
app.use(express.json()) // to get data from the client side we need to use req.body and this allows us to access the req.body and get json data.

// DB ROUTES \\

app.use('/trade/', tradeRoutes);

app.use('/portfolio/', portfolioRoutes);


// DB Register


// API ROUTES \\
app.get('/api/stocks/search', (req, res) => {
  const symbol = req.query.symbol
  console.log(symbol)
  axios.get(`https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbol}&types=quote&token=pk_e187f175e42d4ac89045179e525ef0e5`)
    .then(response => {
      res.send(response.data[Object.keys(response.data)[0]].quote)
    })
    .catch(error => {
      console.log('error from server- API routes', error)
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
      console.log('error from server- API routes', err)
    })
})

app.get('/api/chart/search', (req, res) => {
  const symbol = req.query.symbol
  console.log(symbol)
  axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/chart/10d?token=pk_e187f175e42d4ac89045179e525ef0e5`)
    .then(response => {
      res.send(response.data)
    })
    .catch(error => {
      console.log('error from server- API routes', error)
    })
});

app.post('/register', async (req, res) => {
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

app.get('/login', async (req, res) => {
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

app.get("/*", (req, res) => { res.sendFile(path.join(__dirname, "client", "build", "index.html")); });

app.listen(port, () => console.log(`Running on port: ${port}`));