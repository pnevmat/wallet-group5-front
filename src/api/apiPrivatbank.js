const fetchCurrency = () =>
  fetch(
    'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
  ).then(res =>{return res.json()}).then(currensy=>{return  currensy})

export default fetchCurrency ;