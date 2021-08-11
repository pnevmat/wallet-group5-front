import React, { Component } from 'react';

import Loader from './Loader/Loader';
import s from './ExchangeBox.module.css';
import fetchCurrency from '../../api/apiPrivatbank';

export default class ExchangeBox extends Component {
  state = {
    persons: [],
    isLoading: true,
  };

  componentDidMount() {
    fetchCurrency().then(currensy => {
      return this.setState({ persons: currensy, isLoading: false });
    });

    if (this.props.props !== undefined) {
      const { url } = this.props.props.props.match;
      if (url === '/currency') {
        const exchangeBox = document.getElementById('exchange');
        exchangeBox.classList.add(s.visible);
      }
    }
  }

  render() {
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
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <ul className={s.exchangeList}>
              {this.state.persons.map((person, i) => (
                <li className={s.exchangeListItem} key={i}>
                  <p className={s.exchangeListItemName}>{person.ccy}</p>
                  <p className={s.exchangeListItemBuy}>
                    {Math.round(person.buy * 100) / 100}
                  </p>
                  <p className={s.exchangeListItemSell}>
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
