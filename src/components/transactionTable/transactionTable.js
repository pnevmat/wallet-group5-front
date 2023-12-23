import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { getTransactionsRequest } from '../../api/apiRequests';
import { getTransactions } from '../../redux/reducers/transactionReducer/transactionReducer';
// import operation from '../../redux/operations/transactionOperations';

import selectors from '../../redux/selectors/authorisationSelectors';
import { getTransaction } from '../../redux/selectors/transactionSelectors/transactionSelectors';

import styles from './TransactionTable.module.css';

export default function TransactionTable() {
  const [transactions, setTransactions] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector(selectors.getUserToken);

  useEffect(() => {
    const getTransactions = async () => {
      const data = await getTransactionsRequest(token);
      console.log('Transactions response data: ', data);
      // if (data) setTransactions(data)
    };
    getTransactions();

    // if (transactions.length) dispatch(getTransactions());
  }, [dispatch]);

  const rows = useSelector(getTransaction);

  const onClickDelete = useCallback(
    id => {
      // dispatch(operation.deleteTransaction(id));
    },
    [dispatch],
  );

  const newDate = date => {
    return moment(date).format('D.MM.YY');
  };

  const modifiedRows = rows.map(row => {
    let modifiedDate = newDate(row.date);
    return {
      amount: row.amount,
      balance: row.balance,
      category: row.category,
      comments: row.comments,
      date: modifiedDate,
      type: row.type,
      id: row.id,
    };
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
        {rows.length > 0
          ? modifiedRows.map((rows, i) => {
              return (
                <div className={styles.tableRowContainer}>
                  <li className={styles.tableRow} key={i}>
                    <span className={styles.tableDateText}>{rows.date}</span>
                    <span className={styles.tableRowText}>
                      {rows.type === 'cost' ? '-' : '+'}
                    </span>
                    <span className={styles.tableRowCategorie}>
                      {rows.category}
                    </span>
                    <span className={styles.tableRowComment}>
                      {rows.comments}
                    </span>
                    <span className={styles.tableAmmountText}>
                      {rows.amount}
                    </span>
                    <span className={styles.tableBalanceText}>
                      {rows.balance}
                    </span>
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
                      <span className={styles.tableRowCategorie}>
                        {rows.category}
                      </span>
                    </div>
                    <div className={styles.mobileTableRowItemsContainer}>
                      <span className={styles.tableHeadText}>Комментарии</span>
                      <span className={styles.tableRowComment}>
                        {rows.comments}
                      </span>
                    </div>
                    <div className={styles.mobileTableRowItemsContainer}>
                      <span className={styles.tableHeadText}>Сумма</span>
                      <span className={styles.tableRowText}>{rows.amount}</span>
                    </div>
                    <div className={styles.mobileTableRowItemsContainer}>
                      <span className={styles.tableHeadText}>Баланс</span>
                      <span className={styles.tableRowText}>
                        {rows.balance}
                      </span>
                    </div>
                  </li>
                  <div className={styles.btnContainer}>
                    <button className={styles.actionButtons} type="button">
                      <EditIcon color="primary" />
                    </button>
                    <button
                      className={styles.actionButtons}
                      type="button"
                      onClick={() => onClickDelete(rows.id)}
                    >
                      <DeleteIcon color="primary" />
                    </button>
                  </div>
                </div>
              );
            })
          : ''}
      </ul>
    </div>
  );
}
