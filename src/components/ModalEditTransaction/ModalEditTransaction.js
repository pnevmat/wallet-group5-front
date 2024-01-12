import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTransactionsRequest,
  editTransactionRequest,
} from '../../api/apiRequests';
import {
  getTransactions,
  editTransaction,
} from '../../redux/reducers/transactionReducer/transactionReducer';
import selectors from '../../redux/selectors/authorisationSelectors';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import RemoveIcon from '@mui/icons-material/Remove';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@mui/material/TextField';
import CategoryForm from './CategoryForm';
import moment from 'moment';

import s from './ModalEditTransaction.module.css';

const ModalEditTransaction = ({ isModalOpen, closeModal, transaction }) => {
  const [category, setCategory] = useState(transaction.category);
  const [status, setStatus] = useState(
    transaction.type === 'cost' ? true : false,
  );
  const [transactionInfo, setTransactionInfo] = useState(
    setTransactionInfoInitState(),
  );

  const token = useSelector(selectors.getUserToken);
  const dispatch = useDispatch();

  const formRef = useRef(null);

  useEffect(() => {
    function onKeyClick(e) {
      if (e.code === 'Escape') {
        closeModal({ ...isModalOpen, [transaction.id]: false });
      }
    }

    document.addEventListener('keydown', onKeyClick);

    return () => {
      document.removeEventListener('keydown', onKeyClick);
    };
  }, [closeModal]);

  function setTransactionInfoInitState() {
    console.log('Transaction date: ', transaction.date);
    return {
      currentDate: moment(transaction.date).format('YYYY-MM-DD'),
      transactionValue: transaction.amount,
      comments: transaction.comments,
    };
  }

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      closeModal({ ...isModalOpen, [transaction.id]: false });
    }
  };

  const handleTransactionInfo = e => {
    const { name, value } = e.currentTarget;
    setTransactionInfo({ ...transactionInfo, [name]: value });
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    const { currentDate, transactionValue, comments } = transactionInfo;
    const editedTransaction = {
      date: `${currentDate} ${moment(transaction.date).format('HH:mm:ss')}`,
      type: status ? 'cost' : 'income',
      amount: Number(transactionValue),
      category: category,
      comments: comments,
    };
    console.log('Edited transaction in submit: ', editedTransaction);
    const editData = await editTransactionRequest(
      transaction.id,
      editedTransaction,
    );
    console.log('Edit transaction response data: ', editData);
    if (editData) dispatch(editTransaction(editData.transaction));

    const { data } = await getTransactionsRequest(token);
    if (editData && data) dispatch(getTransactions(data.transactions));

    closeModal();
  };
  console.log('Transaction info current date: ', transactionInfo.currentDate);
  // Подключить тостифай вместо консоль лога
  return (
    <div className={s.overlay} onClick={e => handleCloseModal(e)}>
      <div className={s.modal}>
        <CloseIcon className={s.closeModalIcon} onClick={closeModal} />
        <ValidatorForm
          ref={formRef}
          onSubmit={e => handleSubmitForm(e)}
          onError={errors => console.log(errors)}
        >
          <h2 className={s.title}>Редактировать транзакцию</h2>
          <div className={s.switchContainer}>
            <p className={status ? s.unactive : s.activeIncome}>Доход</p>
            <Switch
              checkedIcon={<RemoveIcon className={s.removeIcon} />}
              icon={<AddIcon className={s.addIcon} />}
              checked={status}
              onChange={() => setStatus(!status)}
            />
            <p className={status ? s.activeInvoice : s.unactive}>Расход</p>
          </div>
          <div className={s.categoryContainer}>
            <CategoryForm
              categoryChange={setCategory}
              status={status}
              selectedCategory={transaction.category}
            />
          </div>
          <div className={s.textField}>
            <TextValidator
              validators={['required', 'isNumber']}
              errorMessages={[
                'это поле обязательно для заполнения',
                'пожалуйста, введите число',
              ]}
              autoComplete={'off'}
              label="0.00"
              margin="dense"
              name="transactionValue"
              value={transactionInfo.transactionValue}
              onChange={e => handleTransactionInfo(e)}
            />
            <TextValidator
              id="date"
              label="Введите дату"
              type="date"
              name="currentDate"
              value={transactionInfo.currentDate}
              className={s.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={e => handleTransactionInfo(e)}
            />
          </div>
          <div className={s.textFieldcomments}>
            <TextField
              className={s.categoryPlaceholder}
              autoComplete={'off'}
              label="Комментарий"
              margin="dense"
              type="textarea"
              name="comments"
              value={transactionInfo.comments}
              onChange={e => handleTransactionInfo(e)}
            />
            <div />
          </div>
          <button className={s.submitButton} type="submit">
            Добавить
          </button>
          <button className={s.closeButton} onClick={closeModal} type="button">
            Отмена
          </button>
        </ValidatorForm>
      </div>
    </div>
  );
};

export default ModalEditTransaction;
