import axios from 'axios';

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

export const buyStock = async (holding, shares) => {
  try {
    const response = await axios.post(`/api/holdings/buy/`, {
      user_id: JSON.parse(localStorage.getItem('data')).id,
      holding,
      shares,
    });
  } catch (err) {
    console.log(err);
  }
};

export const sellStock = async (holding, shares) => {
  try {
    const response = await axios.post(`/api/holdings/sell/`, {
      user_id: JSON.parse(localStorage.getItem('data')).id,
      holding,
      shares,
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchForHolding = async symbol => {
  // debugger;
  try {
    const response = await axios.get(`/api/stocks/search/?symbol=${symbol}`);
    return response.data;
  } catch (err) {
    console.error('error in search for holding', err.message);
  }
};
