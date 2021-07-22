import React, { Component } from 'react';
import axios from 'axios';
import Loader from './Loader/Loader';
import s from './ExchangeBox.module.css';
import fetch from './fetch';
export default class ExchangeBox extends Component {
  state = {
    persons: [],
    isLoading: false,
  };

  componentDidMount() {
    // let user = await  axios.get(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`)
    fetch().then(res => this.setState({ persons: res.data }));

    // this.setState({ isLoading: false });

    // this.setState({ persons });
  }

  render() {
    console.log(this.state.persons);
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
                <p className={s.exchangeListAtemTitleName}>Продажа</p>
              </li>
            </ul>
          </div>
          <div className={s.exchangeListBox}>
            {this.state.isLoading ? (
              <Loader />
            ) : (
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
            )}
          </div>
        </div>
      </>
    );
  }
}
