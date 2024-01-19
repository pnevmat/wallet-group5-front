import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import fetchCurrency from '../../api/apiPrivatbank';
import { getExchange } from '../../redux/reducers/exchangeReducer/exchangeReducer';
import { currencyCodes } from '../../utils/iso4217CurrencyCodes';

import s from './ExchangeBox.module.css';

const ExchangeBox = () => {
  const { pathname } = useLocation();
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

      const mainCurrencies = filteredData.filter(currency => {
        if (currency && !currency.rateCross) {
          if (
            currencyCodes[currency.currencyCodeA] === 'USD' ||
            currencyCodes[currency.currencyCodeA] === 'EUR' ||
            currencyCodes[currency.currencyCodeA] === 'GBP'
          ) {
            return currency;
          }
        }

        return false;
      });

      dispatch(getExchange(mainCurrencies));
    };

    const todayUnixTime = Math.round(new Date().getTime() / 1000.0);
    const oneDayUnixTime = 24 * 60 * 60;
    const currencyDate = exchangeRates[0]?.date;

    if (
      (Object.keys(exchangeRates).length === 0 && !currencyDate) ||
      (currencyDate && todayUnixTime - currencyDate >= oneDayUnixTime)
    ) {
      handleGetCurrency();
    }
  }, [dispatch, exchangeRates]);

  useEffect(() => {
    if (exchangeRates.length > 0 && persons.length === 0) {
      setPersons(exchangeRates);
      setIsLoading(false);
    }
  }, [exchangeRates, persons.length]);

  return (
    <div
      className={s.exchangeContainer}
      style={
        pathname === '/currency'
          ? {
              display: 'inline-block',
              width: '100%',
              paddingRight: '10px',
              paddingLeft: '10px',
              marginTop: '10px',
            }
          : {}
      }
      id="exchange"
    >
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
