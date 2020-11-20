const express = require('express')
const app = express();
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 5000;

// Set my buildb  as a static folder.
// We just need to put the files in buils and it'll work
app.use('/', express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/api/stocks/showcase', (req, res) => {
  const companies = []
  axios.get('https://cloud.iexapis.com/stable/stock/market/batch?symbols=fb,aapl,tsla,googl,msft,nflx&types=quote&token=pk_e187f175e42d4ac89045179e525ef0e5')
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

app.listen(port, () => console.log(`You are live on port: ${port}`))