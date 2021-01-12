import axios from 'axios'

// export const getSearchedStock = async (symbol) => {
//   try {
//     // const symbol = req.query.symbol
//     const response = await axios.get(`https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbol}&types=quote&token=pk_e187f175e42d4ac89045179e525ef0e5`)

//     // res.send(response.data[Object.keys(response.data)[0]].quote)
//     return response.data[Object.keys(response.data)[0]].quote

//   } catch (err) {
//     console.error('Error in get searched stock', err.message)

//   }
// }

// app.get('/api/stocks/search', (req, res) => {
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

// app.get('/api/stocks/search', (req, res) => {
//   console.log(symbol)
//     .then(response => {
//     })
//     .catch(error => {
//       console.log('error from server- API routes', error)
//     })
// })

// export const createHolding = async (holding) => {
//   try {
//     const response = await axios.post('/trade', {
//       name: holding.companyName,
//       symbol: holding.symbol,
//       shares: holding.shares,
//       price: holding.price,
//       changePercent: holding.changePercent,
//       user_id: JSON.parse(localStorage.getItem('data')).id
//     })
//   } catch (err) {
//     console.error('Error in create holding', err.message)
//   }
// }