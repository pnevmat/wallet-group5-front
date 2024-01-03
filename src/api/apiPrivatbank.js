import axios from 'axios';

// axios.defaults.headers = {
//   'Access-Control-Allow-Origin': 'no-cors',
//   'Content-Type': 'application/json',
// };

const url = 'https://api.monobank.ua/bank/currency';

const fetchCurrency = async () => {
  const response = await axios.get(url);
  console.log('Monobank currency response: ', response);
  return response.data;
};

// fetch(url, {
// 	mode: 'no-cors',
// 	method: 'GET',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// }).then(response => response.json());

export default fetchCurrency;
// 'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11'
// 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
