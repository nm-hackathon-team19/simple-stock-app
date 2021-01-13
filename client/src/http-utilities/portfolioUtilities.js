import axios from 'axios'

export const getWallet = async () => {
  try {
    const response = await axios.get(`/portfolio/wallet/${JSON.parse(localStorage.getItem('data')).id}`);
    return response.data
  } catch (err) {
    console.error('Error in get holdings', err.message);
  }
};