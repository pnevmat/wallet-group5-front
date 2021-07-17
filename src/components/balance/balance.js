import React, {useEffect} from 'react';
import s from './balance.module.css';
import {getTransaction } from '../../redux/selectors/transactionSelectors/transactionSelectors'

import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../redux/selectors/authorisationSelectors';
import operation from '../../redux/operations/transactionOperations'



const Balance = (props) => {
  // const dispatch = useDispatch();
  // const token =useSelector(selectors.getUserToken);
  // useEffect(() => {
  //     dispatch(operation.fetchTransaction(token));
  //  }, [dispatch]);

  //   const transaction=useSelector(getTransaction)
  //   console.log(transaction)
  //  const currentBalance=transaction[0]
  //  console.log(currentBalance.owner.balance)
  return (
    <div className={s.conteiner}>
      <p className={s.title}>ВАШ БАЛАНС</p>
     { <p className={s.balance}>₴{props.balance}</p>}
    </div>
  );
};
export default Balance;
