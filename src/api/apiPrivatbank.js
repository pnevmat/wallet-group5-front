import axios from 'axios';

const url = 'https://api.monobank.ua/bank/currency';

const fetchCurrency = async () => {
  const response = await axios.get(url);
  return response.data;
};

export default fetchCurrency;
