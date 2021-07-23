import React from 'react';

import s from './balance.module.css';



const Balance = (props) => {
  return (
    <div className={s.conteiner}>
      <p className={s.title}>ВАШ БАЛАНС</p>
      <p className={s.balance}>₴ {props.balance}</p>
    </div>
  );
};
export default Balance;
