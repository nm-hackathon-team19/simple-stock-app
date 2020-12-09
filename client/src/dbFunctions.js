import axios from 'axios'

export const createHolding = async (holding) => {
  try {
    const response = await axios.post('/trade', {
      name: holding.companyName,
      symbol: holding.symbol,
      shares: holding.numberOfShares,
      price: holding.price,
      changePercent: holding.changePercent,
    })
  } catch (err) {
    console.error(err.message)
  }
}

export const getHoldings = async (setHoldings) => {
  try {
    const response = await axios.get('/trade');
    setHoldings(response.data)
  } catch (err) {
    console.error(err.message);
  }
}


