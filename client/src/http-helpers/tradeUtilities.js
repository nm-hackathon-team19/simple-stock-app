import axios from 'axios';

export const createHolding = async holding => {
  try {
    const response = await axios.post('/api/holdings', {
      name: holding.companyName,
      symbol: holding.symbol,
      shares: holding.shares,
      price: holding.price,
      changePercent: holding.changePercent,
      user_id: JSON.parse(localStorage.getItem('data')).id,
    });
  } catch (err) {
    console.error('Error in create holding', err.message);
  }
};

export const getHoldings = async () => {
  try {
    const response = await axios.get(
      `/api/holdings/${JSON.parse(localStorage.getItem('data')).id}`
    );
    return response.data;
  } catch (err) {
    console.error('Error in get holdings', err.message);
  }
};

export const updateHolding = async (id, shares) => {
  try {
    const response = await axios.put(`/api/holdings/${id}`, {
      shares,
    });
  } catch (err) {
    console.error('Error in update holding', err.message);
  }
};

export const deleteHolding = async id => {
  try {
    const response = await axios.delete(`/api/holdings/${id}`);
  } catch (err) {
    console.error('Error in delete holding', err.message);
  }
};

export const buyStock = async (holding, shares) => {
  try {
    const response = await axios.post(`/api/holdings/buy/`, {
      user_id: JSON.parse(localStorage.getItem('data')).id,
      holding,
      shares,
    });
  } catch (err) {}
};

export const sellStock = async (holding, shares) => {
  try {
    const response = await axios.post(`/api/holdings/sell/`, {
      user_id: JSON.parse(localStorage.getItem('data')).id,
      holding,
      shares,
    });
  } catch (err) {}
};

export const searchForHolding = async symbol => {
  try {
    const response = await axios.get(`api/stock/search/?symbol=${symbol}`);
    return response.data;
  } catch (err) {
    console.error('error in search for holding', err.message);
  }
};
