import React, { useState, useEffect } from 'react';
// import { createPortal } from 'react-dom';

import CategoryForm from './CategoryForm';
import moment from 'moment';

// import transactionOperation from '../../redux/operations/transactionOperations';

import Switch from '@material-ui/core/Switch';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from '@material-ui/icons/Remove';

import s from './modalAddBudget.module.css';

const ModalAddBudget = (props) => {
  // Переписать модалку на хуки и изменить под нужды модалки создани бюджета

  const [category, setCategory] = useState({})
  const [transactionValue, setTransactionValue] = useState('');
  const dateFormat = moment().format('YYYY-MM-DD');
  const [currentDate, setCurrentDate] = useState(dateFormat);
  const [budgetFieldsCounter, setBudgetFieldsCounter] = useState([1]);

  // useEffect(() => {
  //   document.addEventListener('keydown', onKeyClick);

  //   return () => {
  //     document.removeEventListener('keydown', onKeyClick);
  //   }
  // }, []);

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      props.closeModal();
    }
  };

  const onKeyClick = e => {
    if (e.code === 'Escape') {
      props.closeModal();
    }
  };
  const onClickClose = () => {
    props.closeModal();
  };

  const onChangeStatus = () => {
  
  };

  const changeClass = (state, class1, class2) => {
    const currentClass = state ? class1 : class2;
    return currentClass;
  };

  const handleTransactionInfo = e => {
    const { name, value } = e.currentTarget;
    setTransactionValue({ [name]: value })
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    // const { currentDate, transactionValue, category, comments, status } =
    //   this.state;

    // const newTransaction = {
    //   date: `${currentDate} ${moment().format('HH:mm:ss')}`,
    //   type: status ? 'cost' : 'income',
    //   amount: transactionValue,
    //   category: category,
    //   comments: comments,
    // };
    // this.onClickClose();
    // this.props.addTransaction(newTransaction);
    
  };
  const onSetCategory = value => {
    setCategory({ category: value })
  };

  const handleAddBudgetField = () => {
    setBudgetFieldsCounter([...budgetFieldsCounter, budgetFieldsCounter.length]);
  }

  // const { сurrentDate, transactionValue, comments } = this.state;
    
  // Подключить тостифай вместо консоль лога
  return (
    <div className={s.overlay} onClick={handleCloseModal}>
      <div className={s.modal}>
        <CloseIcon className={s.closeModalIcon} onClick={onClickClose} />
        <ValidatorForm
          // ref="form"
          onSubmit={handleSubmitForm}
          onError={errors => console.log(errors)}
        >
          <h2 className={s.title}>Запланировать бюджет</h2>
          <div className={s.formFieldsContainer}>
            {budgetFieldsCounter.map(item => {
              return (
                <div key={item} >
                  <div className={s.categoryContainer}>
                    <CategoryForm categoryChange={onSetCategory} />
                  </div>
                  <div className={s.textField}>
                    <TextValidator
                      validators={['required', 'isNumber']}
                      errorMessages={[
                        'это поле обязательно для заполнения',
                        'пожалуйста, введите число'
                      ]}
                      autoComplete={'off'}
                      label="0.00"
                      margin="dense"
                      name="transactionValue"
                      value={transactionValue}
                      onChange={handleTransactionInfo}
                    />
                    <TextValidator
                      id="date"
                      label="Введите дату"
                      type="date"
                      name="currentDate"
                      value={currentDate}
                      defaultValue={`${currentDate}`}
                      className={s.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={handleTransactionInfo}
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <div className={s.btnContainer}>
            <button className={s.addBtn} type="button" onClick={handleAddBudgetField} >
              <AddIcon />
            </button>
          </div>
          <button
            className={s.submitButton}
            type="submit"
          >
            Сохранить
          </button>
          <button
            className={s.closeButton}
            onClick={onClickClose}
            type="button"
          >
            Отмена
          </button>
        </ValidatorForm>
      </div>
    </div>
  );
}

export default ModalAddBudget;