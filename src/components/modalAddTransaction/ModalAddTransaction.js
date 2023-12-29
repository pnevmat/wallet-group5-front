import React, { useState, useEffect, useRef } from 'react';
import { addTransactionRequest } from '../../api/apiRequests';
import { addTransaction } from '../../redux/reducers/transactionReducer/transactionReducer';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import RemoveIcon from '@mui/icons-material/Remove';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@mui/material/TextField';
import CategoryForm from './CategoryForm';
import moment from 'moment';

import s from './ModalAddTransaction.module.css';

const ModalAddTransaction = ({ closeModal }) => {
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState(true);
  const [transactionInfo, setTransactionInfo] = useState(
    setTransactionInfoInitState(),
  );

  const formRef = useRef(null);

  useEffect(() => {
    function onKeyClick(e) {
      if (e.code === 'Escape') {
        closeModal();
      }
    }

    document.addEventListener('keydown', onKeyClick);

    return () => {
      document.removeEventListener('keydown', onKeyClick);
    };
  }, [closeModal]);

  function setTransactionInfoInitState() {
    return {
      currentDate: moment().format('HH:mm:ss'),
      transactionValue: 0,
      comments: '',
    };
  }

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleTransactionInfo = e => {
    const { name, value } = e.currentTarget;
    setTransactionInfo({ ...transactionInfo, [name]: value });
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    const { currentDate, transactionValue, comments } = transactionInfo;
    const newTransaction = {
      date: `${currentDate} ${moment().format('HH:mm:ss')}`,
      type: status ? 'cost' : 'income',
      amount: transactionValue,
      category: category,
      comments: comments,
    };
    const data = await addTransactionRequest(newTransaction);
    console.log('Add transaction response data: ', data);
    // if (data) {
    //   addTransaction(data);
    //   closeModal();
    // }
  };
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
          <h2 className={s.title}>Добавить транзакцию</h2>
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
          {status && (
            <div className={s.categoryContainer}>
              <CategoryForm categoryChange={setCategory} />
            </div>
          )}

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
              defaultValue={`${transactionInfo.currentDate}`}
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

export default ModalAddTransaction;
