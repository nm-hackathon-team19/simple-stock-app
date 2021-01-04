import axios from 'axios'

export const createHolding = async (holding) => {
  try {
    const response = await axios.post('/trade', {
      name: holding.companyName,
      symbol: holding.symbol,
      shares: holding.shares,
      price: holding.price,
      changePercent: holding.changePercent,
      user_id: localStorage.getItem('user_id')
    })
  } catch (err) {
    console.error('Error in create holding', err.message)
  }
}

export const getHoldings = async () => {
  try {
    const response = await axios.get(`/trade/${localStorage.getItem('user_id')}`);
    // setHoldings(response.data)
    return response.data;
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

export const deleteHolding = async (id) => {
  try {
    const response = await axios.delete(`/trade/${id}`);
  } catch (err) {
    console.error('Error in delete holding', err.message);
  }
}

// get user name
export const getUserName = async (user_id) => {
  try {
    const userName = await axios.get(`/portfolio/${user_id}`);
    return userName.data;
  } catch (err) {
    console.error('Error in get user name', err.message);
  }
}