const express = require('express')
const app = express();
const axios = require('axios');
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/home', (req, res) => {
  res.send('Home page')
})

app.get('/stocks', (req, res) => {
  axios.get('https://cloud.iexapis.com/stable/tops?token=pk_e187f175e42d4ac89045179e525ef0e5&symbols=aapl')
    .then(function (response) {
      console.log(response.data)
      res.send(response.data)
    })
    .catch(function (err) {
      console.log(err)
    })
})

app.listen(port, () => console.log(`You are live on port: ${port}`))