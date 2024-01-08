import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import fetchCurrency from '../../api/apiPrivatbank';
import { getExchange } from '../../redux/reducers/exchangeReducer/exchangeReducer';
import { currencyCodes } from '../../utils/iso4217CurrencyCodes';

import s from './ExchangeBox.module.css';

const ExchangeBox = () => {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const exchangeRates = useSelector(store => store.exchange.rates);

  useEffect(() => {
    const handleGetCurrency = async () => {
      const data = await fetchCurrency();

      const filteredData = data.filter(
        currency =>
          currency &&
          Object.keys(currencyCodes).includes(
            currency.currencyCodeA.toString(),
          ) &&
          currency.currencyCodeB === 980,
      );

      const mainCurrencies = filteredData.filter(
        currency =>
          (currency && currencyCodes[currency.currencyCodeA] === 'USD') ||
          currencyCodes[currency.currencyCodeA] === 'EUR' ||
          currencyCodes[currency.currencyCodeA] === 'GBP',
      );

      dispatch(getExchange(mainCurrencies));
    };
    // [
    // 	{
    // 		currencyCodeA: 840,
    // 		currencyCodeB: 980,
    // 		date: 1704282006,
    // 		rateBuy: 37.95,
    // 		rateSell: 38.4497,
    // 	},
    // ]

    const todayUnixTime = Math.round(new Date().getTime() / 1000.0);
    const oneDayUnixTime = 24 * 60 * 60;
    console.log('One day unix time: ', oneDayUnixTime);
    const currencyDate = exchangeRates[0]?.date;
    console.log(
      'Today and currency date difference unix: ',
      todayUnixTime - currencyDate,
    );

    if (
      (exchangeRates.length === 0 && !currencyDate) ||
      (currencyDate && todayUnixTime - currencyDate >= oneDayUnixTime)
    ) {
      handleGetCurrency();
    }

    // if (this.props.props !== undefined) {
    //   const { url } = this.props.props.props.match;
    //   if (url === '/currency') {
    //     const exchangeBox = document.getElementById('exchange');
    //     exchangeBox.classList.add(s.visible);
    //   }
    // }
  }, [dispatch, exchangeRates]);

  useEffect(() => {
    if (exchangeRates.length > 0 && persons.length === 0) {
      setPersons(exchangeRates);
      setIsLoading(false);
    }
  }, [exchangeRates, persons.length]);

  return (
    <div className={s.exchangeContainer} id="exchange">
      <div className={s.exchangeTitleBox}>
        <ul className={s.exchangeListTitle}>
          <li className={s.exchangeListAtemTitle}>
            <span className={s.exchangeListAtemTitleName}>Валюта</span>
          </li>
          <li className={s.exchangeListAtemTitle}>
            <span className={s.exchangeListAtemTitleName}>Покупка</span>
          </li>
          <li className={s.exchangeListAtem}>
            <span className={s.exchangeListAtemTitleName}>Продажа</span>
          </li>
        </ul>
      </div>
      <div className={s.exchangeListBox}>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className={s.exchangeList}>
            {persons.map((person, i) => (
              <li className={s.exchangeListItem} key={i}>
                <p className={s.exchangeListItemName}>
                  {currencyCodes[person.currencyCodeA]}
                </p>
                <p className={s.exchangeListItemBuy}>
                  {Math.round(person.rateBuy * 100) / 100}
                </p>
                <p className={s.exchangeListItemSell}>
                  {Math.round(person.rateSell * 100) / 100}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExchangeBox;
