import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import operation from '../../redux/operations/transactionOperations';

import selectors from '../../redux/selectors/authorisationSelectors';
import { getTransaction } from '../../redux/selectors/transactionSelectors/transactionSelectors';

import styles from './transactionTable.module.css';

export default function TransactionTable() {

  const dispatch = useDispatch();
  const token = useSelector(selectors.getUserToken);
  useEffect(() => {
      dispatch(operation.fetchTransaction(token));
   }, [dispatch]);

  const rows = useSelector(getTransaction)

  const newDate = (date)=>{
    return moment(date).format('D.MM.YY')
  }

  const modifiedRows = rows.map(row => {
    let modifiedDate = newDate(row.date);
    return {
      amount: row.amount,
      balance: row.balance,
      category: row.category,
      comments: row.comments,
      date: modifiedDate,
      type: row.type
    }
  });

  return (
    <div className={styles.container}>
      <ul className={styles.tableHead}>
        <li className={styles.tableHeadText}>Дата</li>
        <li className={styles.tableHeadText}>Тип</li>
        <li className={styles.tableHeadText}>Категория</li>
        <li className={styles.tableHeadText}>Комментарии</li>
        <li className={styles.tableHeadText}>Сумма</li>
        <li className={styles.tableHeadText}>Баланс</li>
      </ul>
      <ul className={styles.tableRowList}>
        {rows.length>0 ? modifiedRows.map((rows, i) => {
          return (
            <div className={styles.tableRowContainer}>
              <li className={styles.tableRow} key={i}>
                <span className={styles.tableRowText}>{rows.date}</span>
                <span className={styles.tableRowText}>{rows.type}</span>
                <span className={styles.tableRowCategorie}>{rows.category}</span>
                <span className={styles.tableRowComment}>{rows.comments}</span>
                <span className={styles.tableRowText}>{rows.amount}</span>
                <span className={styles.tableRowText}>{rows.balance}</span>
              </li>
              <li className={styles.mobileTableRow} key={i}>
                <div className={styles.mobileTableRowItemsContainer}>
                  <span className={styles.tableHeadText}>Дата</span>
                  <span className={styles.tableRowText}>{rows.date}</span>
                </div>
                <div className={styles.mobileTableRowItemsContainer}>
                  <span className={styles.tableHeadText}>Тип</span>
                  <span className={styles.tableRowText}>{rows.type}</span>
                </div>
                <div className={styles.mobileTableRowItemsContainer}>
                  <span className={styles.tableHeadText}>Категория</span>
                  <span className={styles.tableRowCategorie}>{rows.category}</span>
                </div>
                <div className={styles.mobileTableRowItemsContainer}>
                  <span className={styles.tableHeadText}>Комментарии</span>
                  <span className={styles.tableRowComment}>{rows.comments}</span>
                </div>
                <div className={styles.mobileTableRowItemsContainer}>
                  <span className={styles.tableHeadText}>Сумма</span>
                  <span className={styles.tableRowText}>{rows.amount}</span>
                </div>
                <div className={styles.mobileTableRowItemsContainer}>
                  <span className={styles.tableHeadText}>Баланс</span>
                  <span className={styles.tableRowText}>{rows.balance}</span>
                </div>
              </li>
            </div>
          )
        }) : ''}
      </ul>
    </div>
  );
};