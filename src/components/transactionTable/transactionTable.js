import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';

import {
  getTransactionsRequest,
  deleteTransactionRequest,
} from '../../api/apiRequests';
import {
  getTransactions,
  deleteTransaction,
} from '../../redux/reducers/transactionReducer/transactionReducer';

import selectors from '../../redux/selectors/authorisationSelectors';
import { getTransaction } from '../../redux/selectors/transactionSelectors/transactionSelectors';
import moment from 'moment';

import styles from './TransactionTable.module.css';

export default function TransactionTable() {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState({});

  const dispatch = useDispatch();

  const token = useSelector(selectors.getUserToken);
  const storeTransactions = useSelector(store => store.transactions);
  const rows = useSelector(getTransaction);
  const user = useSelector(store => store.userData.authorisationData);

  useEffect(() => {
    const handleGetTransactions = async () => {
      const { data } = await getTransactionsRequest(token);

      if (data) dispatch(getTransactions(data.transactions));
    };

    handleGetTransactions();
  }, [dispatch, token]);

  useEffect(() => {
    if (transactions.length === 0) setTransactions(storeTransactions);
  }, [transactions.length, storeTransactions]);

  useEffect(() => {
    if (storeTransactions.length > 0) {
      let modalOpenState = {};
      storeTransactions.forEach(transaction => {
        modalOpenState[transaction.id] = false;
      });

      setIsModalOpen(modalOpenState);
    }
  }, [storeTransactions]);

  const onClickDelete = async (userEmail, transactionId) => {
    const delData = await deleteTransactionRequest(userEmail, transactionId);
    if (delData) dispatch(deleteTransaction(delData.transaction));

    const { data } = await getTransactionsRequest(token);
    if (delData && data) dispatch(getTransactions(data.transactions));
  };

  const newDate = date => {
    return moment(date).format('D.MM.YY');
  };

  const modifiedRows = rows.map(row => {
    return {
      amount: row.amount,
      balance: row.balance,
      category: row.category,
      comments: row.comments,
      date: row.date,
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
          ? modifiedRows.map(row => {
              return (
                <div className={styles.tableRowContainer} key={row.id}>
                  <li className={styles.tableRow}>
                    <span className={styles.tableDateText}>
                      {newDate(row.date)}
                    </span>
                    <span className={styles.tableRowText}>
                      {row.type === 'cost' ? '-' : '+'}
                    </span>
                    <span className={styles.tableRowCategorie}>
                      {row.category}
                    </span>
                    <span className={styles.tableRowComment}>
                      {row.comments}
                    </span>
                    <span className={styles.tableAmmountText}>
                      {row.amount}
                    </span>
                    <span className={styles.tableBalanceText}>
                      {row.balance}
                    </span>
                  </li>
                  <li className={styles.mobileTableRow}>
                    <div className={styles.mobileTableRowItemsContainer}>
                      <span className={styles.tableHeadText}>Дата</span>
                      <span className={styles.tableRowText}>
                        {newDate(row.date)}
                      </span>
                    </div>
                    <div className={styles.mobileTableRowItemsContainer}>
                      <span className={styles.tableHeadText}>Тип</span>
                      <span className={styles.tableRowText}>{row.type}</span>
                    </div>
                    <div className={styles.mobileTableRowItemsContainer}>
                      <span className={styles.tableHeadText}>Категория</span>
                      <span className={styles.tableRowCategorie}>
                        {row.category}
                      </span>
                    </div>
                    <div className={styles.mobileTableRowItemsContainer}>
                      <span className={styles.tableHeadText}>Комментарии</span>
                      <span className={styles.tableRowComment}>
                        {row.comments}
                      </span>
                    </div>
                    <div className={styles.mobileTableRowItemsContainer}>
                      <span className={styles.tableHeadText}>Сумма</span>
                      <span className={styles.tableRowText}>{row.amount}</span>
                    </div>
                    <div className={styles.mobileTableRowItemsContainer}>
                      <span className={styles.tableHeadText}>Баланс</span>
                      <span className={styles.tableRowText}>{row.balance}</span>
                    </div>
                  </li>
                  <div className={styles.btnContainer}>
                    <button
                      className={styles.actionButtons}
                      type="button"
                      onClick={() =>
                        setIsModalOpen({ ...isModalOpen, [row.id]: true })
                      }
                    >
                      <EditIcon color="primary" />
                    </button>
                    <button
                      className={styles.actionButtons}
                      type="button"
                      onClick={() => onClickDelete(user.email, row.id)}
                    >
                      <DeleteIcon color="primary" />
                    </button>
                  </div>
                  {isModalOpen[row.id] && (
                    <ModalEditTransaction
                      isModalOpen={isModalOpen}
                      closeModal={setIsModalOpen}
                      transaction={row}
                    />
                  )}
                </div>
              );
            })
          : ''}
      </ul>
    </div>
  );
}
