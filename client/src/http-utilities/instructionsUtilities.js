import axios from 'axios'

export const getMostActiveStocks = async () => {
  try {
    const response = await axios.get('/api/stocks/mostactive');
    return response.data
  } catch (err) {
    console.log("error mostactive stocks client side", err);
  }
};