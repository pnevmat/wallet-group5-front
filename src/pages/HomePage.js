import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../components/loginForm/loginForm';
import AppBar from '../components/AppBar/AppBar';
// import HomeComponent from '../components/HomePage/HomeComponent';

import loginOperation from '../redux/operations/loginOperation';
import selectors from '../redux/selectors/registrationSelectors';

import s from '../components/AppBar/financeAppBoyImg/financeAppBoyImg.module.css';

const HomePage = (props) => {
  const dispatch = useDispatch();
  
  const onLoginSubmit = userData => dispatch(loginOperation(userData));

  const error = useSelector(selectors.registrationSelector);

  if (error && typeof error === 'string') {
    alert(`${error}`);
  }

  // Это я помогал Сше Иващуку писать функцию дл того чтобы бэк отдавал валидный объект на страницу статистики
  // ======================================================
//   const taskResult = {
//     incomeBalance: 53000,
//     costBalance: 16000,
//     categories: [
//       {id: 1, categorie: "Основной доход", amount: 35000, color: "#372813"},
//       {id: 2, categorie: "Ремонт машины", amount: 13000, color: "#030b05"},
//       {id: 3, categorie: "Ремонт ноутбука", amount: 3000, color: "#1d101c"},
//       {id: 4, categorie: "Допольнительный зароботок", amount: 18000, color: "#040c06"}
//     ]
//   }

//   const array1 = [
//     {id: 0, name: 'Продукты', amount: 1500 },
//     {id: 1, name: 'Ремонт машины', amount: 8000 },
//     {id: 2, name: 'Ремонт машины', amount: 5000 }
//   ];

//   const array2 = [
//     {"name":"Основные расходы","color":"#FED057"},
//     {"name":"Продукты","color":"#FFD8D0"},
//     {"name":"Машина","color":"#FD9498"},
//     {"name":"Забота о себе","color":"#C5BAFF"},
//     {"name":"Забота о детях","color":"#6E78E8"},
//     {"name":"Товары для дома","color":"#4A56E2"},
//     {"name":"Образование","color":"#81E1FF"},
//     {"name":"Досуг","color":"#24CCA7"},
//     {"name":"Другие расходы","color":"#00AD84"},
//     {"name":"Ремонт машины","color":"#AC4502"},
//     {"name":"Доход","color":"#865F5F"}
//   ];

// const concatArray = (array1, array2) => {
//   let arr = null
//   const array1Result = array1.map((elem, index) => {
//     const array2result = array2.find((item) => item.name === elem.name);
//         const row = [{id: index, categorie: array2result.name, amount: elem.amount, color: array2result.color}];
//         console.log('Object of stat data: ', row);
//         // debugger
//         if (arr) {
//           arr.map((element, i) => {
//             if (element.categorie === array2result.name) {
//               const el = {id: index, categorie: element.categorie, amount: element.amount + elem.amount, color: element.color}
//               return arr = [arr[i-1], el]
//             } else if (!arr.find(it => it.categorie === array2result.name)) {
//               return arr = [...arr, ...row]
//             }
//           })
//         } else {
//           arr = [...row]
//         }
//     // arr[elem.name] = Object.assign((arr[elem.name] || {}), row);
//     console.log('Array2 result: ', array2result);
//     return arr;
//   });
//   console.log('Array1 result: ', array1Result);
//   return array1Result[array1Result.length - 1];
// }

// const result = concatArray(array1, array2)
// console.log('Final result of the function: ', result);
  // ======================================================

  return (
    <>
      <div className={s.containerloginPages}>
        <AppBar {...props} />
        <LoginForm onLoginSubmit={onLoginSubmit} />
      </div>
      {/* <HomeComponent /> */}
    </>
  );
};
export default HomePage;
