import axios from 'axios'

export const createHolding = async (holding) => {
  try {
    const response = await axios.post('/trade', {
      name: holding.companyName,
      symbol: holding.symbol,
      shares: holding.shares,
      price: holding.price,
      changePercent: holding.changePercent,
    })
  } catch (err) {
    console.error('Error in create holding', err.message)
  }
}

export const getHoldings = async (setHoldings) => {
  try {
    const response = await axios.get('/trade');
    setHoldings(response.data)
  } catch (err) {
    console.error('Error in get holdings', err.message);
  }
}

export const updateHolding = async (id, shares) => {
  try {
    const response = await axios.put(`trade/${id}`, {
      shares
    })
  } catch (err) {
    console.error('Error in update holding', err.message)
  }
}
