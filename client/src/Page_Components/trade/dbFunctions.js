import axios from 'axios'

export const createHolding = async (holding) => {
  const { id, name, numberOfStocks, price, symbol } = holding
  const share_number = parseInt(numberOfStocks);
  const share_price = parseInt(price);
  const total_money = share_number * share_price
  try {
    const response = await axios.post('/trade', {
      company: name,
      symbol: symbol,
      share_number: share_number,
      total_money: total_money,
      share_price: share_price
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


