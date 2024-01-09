import axios from 'axios';

const url = 'https://api.monobank.ua/bank/currency';

const fetchCurrency = async () => {
  const response = await axios.get(url);
  console.log('Monobank currency response: ', response);
  return response.data;
};

export default fetchCurrency;
