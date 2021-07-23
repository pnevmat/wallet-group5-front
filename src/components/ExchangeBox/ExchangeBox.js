import React, { Component } from 'react';
import axios from 'axios';
import Loader from './Loader/Loader';
import s from './ExchangeBox.module.css';
import fetch from './fetch';
export default class ExchangeBox extends Component {
  state = {
    persons: [],
    isLoading:true,
  };

  componentDidMount() {
    // let user = await  axios.get(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`)
    // this.state()
    fetch().then(res => this.setState({ persons: res.data,sLoading:false }));
    

    // this.setState({ isLoading: false });

    // this.setState({ persons });
  }

  render() {
    return (
        <div className={s.exchangeContainer}>
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
            {this.state.isLoading ? (
              <Loader />
            ) : (
              <ul className={s.exchangeList}>
                {this.state.persons.map((person, i) => (
                  <li className={s.exchangeListItem} key={i}>
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
    );
  }
}
