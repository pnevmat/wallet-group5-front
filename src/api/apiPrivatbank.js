// const fetchCurrency = async () => {
//     try {
//       const response = await fetch(
//         'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
//       );
//       const rates = response.json();
//       return rates;
//     } catch (error) {
//       throw error;
//     }
//   };
//   const data=fetchCurrency()
//   console.log( data)

const fetchCurrency = () =>
  fetch(
    'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
  ).then(res =>{return res.json()}).then(currensy=>{return  currensy})
  
  
//  

console.log( fetchCurrency())
  export default fetchCurrency ;