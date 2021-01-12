const express = require('express')
const app = express();
const path = require('path');
const axios = require('axios');

// Set my buildb  as a static folder.
// We just need to put the files in buils and it'll work
app.use('/', express.static(path.join(__dirname, 'client/build')));


app.use(express.json()) // to get data from the client side we need to use req.body and this allows us to access the req.body and get json data.

// DB ROUTES \\

const tradeRoutes = require('./routes/tradeRoutes');
app.use('/trade/', tradeRoutes);

const portfolioRoutes = require('./routes/portfolioRoutes');
app.use('/portfolio/', portfolioRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/auth/', authRoutes);

const stocksRoutes = require('./routes/stocksRoutes');
app.use('/stocks/', stocksRoutes);

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
  const holdings = []
  axios.get('https://cloud.iexapis.com/stable/stock/market/batch?symbols=msft,nflx,googl&types=quote&token=pk_e187f175e42d4ac89045179e525ef0e5')
    .then(function (response) {
      Object.keys(response.data).forEach(function (key) {
        holdings.push(response.data[key].quote)
      })
      res.json(holdings)
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





// Catch all
app.get("/*", (req, res) => { res.sendFile(path.join(__dirname, "client", "build", "index.html")); });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running on port: ${port}`));