import React, { Component } from 'react';
import axios from 'axios';

import s from './ExchangeBox.module.css';


export default class ExchangeBox extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons.length);
      });
  }

  render() {
    return (
      <>
        <div className={s.exchangeContainer}>
          <div className={s.exchangeTitleBox}>
            <ul className={s.exchangeListTitle}>
              <li className={s.exchangeListAtemTitle}>
                <p className={s.exchangeListAtemTitleName}>Валюта</p>
              </li>

              <li className={s.exchangeListAtemTitle}>
                <p className={s.exchangeListAtemTitleName}>Покупка</p>
              </li>
              <li className={s.exchangeListAtem}>
                <p className={s.exchangeListAtemTitleName}>Продаж</p>
              </li>
            </ul>
          </div>
          <div className={s.exchangeListBox}>
          <ul className={s.exchangeList}>
            {this.state.persons.map(person => (
              <li className={s.exchangeListItem}>
                <p className={s.exchangeListItemName}>{person.ccy}</p>
                <p className={s.exchangeListItemName}>
                  {Math.round(person.buy * 100) / 100}
                </p>
                <p className={s.exchangeListItemName}>
                  {Math.round(person.sale * 100) / 100}
                </p>
              </li>
            ))}
          </ul>
          {/* <div className={s.linear}></div> */}
          </div>
         
         
        </div>
      </>
    );
  }
}
