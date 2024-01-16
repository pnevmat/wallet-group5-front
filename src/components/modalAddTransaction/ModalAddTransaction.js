import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTransactionsRequest,
  addTransactionRequest,
} from '../../api/apiRequests';
import {
  getTransactions,
  addTransaction,
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
import { validate } from '../../utils/validation/categoryFormValidate';

import s from './ModalAddTransaction.module.css';

const ModalAddTransaction = ({ closeModal }) => {
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState(true);
  const [transactionInfo, setTransactionInfo] = useState(
    setTransactionInfoInitState(),
  );
  const [validField, setValidField] = useState({ category: '', comments: '' });

  const token = useSelector(selectors.getUserToken);
  const dispatch = useDispatch();

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
      currentDate: moment().format('YYYY-MM-DD'),
      transactionValue: '',
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

    if (name === 'comments') {
      handleBlur(e);
    }
  };

  const handleBlur = e => {
    const { name, value } = e.target;

    if (
      (name === 'category' && value === '') ||
      (name === 'category' && value === 'Выберите категорию')
    ) {
      setValidField({ ...validField, category: validate.select() });
    } else if (name === 'comments' && value === '') {
      setValidField({ ...validField, comments: validate.input() });
    }

    if (name === 'category' && value !== 'Выберите категорию' && value !== '') {
      setValidField({ ...validField, category: '' });
    } else if (name === 'comments' && value !== '') {
      setValidField({ ...validField, comments: '' });
    }
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    if (
      (transactionInfo.comments === '' && category === '') ||
      (transactionInfo.comments === '' && category === 'Выберите категорию')
    ) {
      setValidField({
        category: validate.select(),
        comments: validate.input(),
      });
      return;
    }

    if (transactionInfo.comments === '') {
      setValidField({ ...validField, comments: validate.input() });
      return;
    }

    if (category === '' || category === 'Выберите категорию') {
      setValidField({ ...validField, category: validate.select() });
      return;
    }

    const { currentDate, transactionValue, comments } = transactionInfo;
    const newTransaction = {
      date: `${currentDate} ${moment().format('HH:mm:ss')}`,
      type: status ? 'cost' : 'income',
      amount: transactionValue,
      category: category,
      comments: comments,
    };
    const addData = await addTransactionRequest(newTransaction);
    if (addData) dispatch(addTransaction(addData.transaction));

    const { data } = await getTransactionsRequest(token);
    if (addData && data) dispatch(getTransactions(data.transactions));

    closeModal();
  };

  return (
    <div className={s.overlay} onClick={e => handleCloseModal(e)}>
      <div className={s.modal}>
        <CloseIcon className={s.closeModalIcon} onClick={closeModal} />
        <ValidatorForm ref={formRef} onSubmit={e => handleSubmitForm(e)}>
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
          <div className={s.categoryContainer}>
            <CategoryForm
              categoryChange={setCategory}
              blur={handleBlur}
              validCategory={validField}
              status={status}
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
              onBlur={e => handleBlur(e)}
            />
            {validField.comments !== '' && (
              <span className={s.validationMessage}>{validField.comments}</span>
            )}
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
