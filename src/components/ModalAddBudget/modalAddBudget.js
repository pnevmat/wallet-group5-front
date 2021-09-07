import React, { useState, useEffect, useRef } from 'react';
// import { createPortal } from 'react-dom';

import CategoryForm from './CategoryForm';
import moment from 'moment';

// import transactionOperation from '../../redux/operations/transactionOperations';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

import s from './modalAddBudget.module.css';

const ModalAddBudget = (props) => {
  // Переписать модалку на хуки и изменить под нужды модалки создани бюджета

  const [category, setCategory] = useState({})
  const [budgetPlanAmmount, setBudgetPlanAmmount] = useState({budgetPlanAmmount0: 0.00});
  const dateFormat = moment().format('YYYY-MM-DD');
  const [currentDate, setCurrentDate] = useState(dateFormat);
  const [budgetFieldsCounter, setBudgetFieldsCounter] = useState([0]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyClick);

    return () => {
      document.removeEventListener('keydown', onKeyClick);
    }
  }, []);

  const formRef = useRef("form");

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

  // const onChangeStatus = () => {
  
  // };

  // const changeClass = (state, class1, class2) => {
  //   const currentClass = state ? class1 : class2;
  //   return currentClass;
  // };

  const handleBudgetPlanAmmount = e => {
    const { name, value } = e.currentTarget;
    const newbudgetPlanAmmount = {...budgetPlanAmmount, [name]: Number(value)}
    setBudgetPlanAmmount(newbudgetPlanAmmount);
    console.log(budgetPlanAmmount);
  };

  const onSetCategory = e => {
    const {name, value} = e.target;
    const newCategories = {...category, [name]: value}
    setCategory(newCategories)
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    let budgetFields = []

    for (const categoryKey in category) {
      for (const budgetPlanAmmountKey in budgetPlanAmmount) {
        if (categoryKey.slice(-1) === budgetPlanAmmountKey.slice(-1)) {
          budgetFields.push({
            [categoryKey]: category[categoryKey],
            [budgetPlanAmmountKey]: budgetPlanAmmount[budgetPlanAmmountKey]
          })
        }
      }
    }

    console.log('On submit data array: ', budgetFields);

    const newBudgetPlan = {
      date: currentDate,
      type: 'budget',
      data: budgetFields
    };
    onClickClose();
    // this.props.addTransaction(newBudgetPlan);
    
  };

  const handleAddBudgetField = () => {
    setBudgetFieldsCounter([...budgetFieldsCounter, budgetFieldsCounter.length]);
  }
    
  // Подключить тостифай вместо консоль лога
  return (
    <div className={s.overlay} onClick={handleCloseModal}>
      <div className={s.modal}>
        <CloseIcon className={s.closeModalIcon} onClick={onClickClose} />
        <ValidatorForm
          ref={formRef}
          onSubmit={handleSubmitForm}
          onError={errors => console.log(errors)}
        >
          <h2 className={s.title}>Запланировать бюджет</h2>
          <div className={s.formContainer}>
            <div className={s.formDateContainer}>
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
                onChange={setCurrentDate}
              />
            </div>
            {budgetFieldsCounter.map(item => {
              return (
                <div key={item} className={s.formFieldContainer}>
                  <div className={s.categoryContainer}>
                      <CategoryForm categorieCounter={item} categoryChange={onSetCategory} />
                  </div>
                  <div className={s.formTextContainer}>
                    <TextValidator
                      label="0.00"
                      name={"budgetPlanAmmount" + item}
                      value={budgetPlanAmmount[budgetPlanAmmount + item]}
                      autoComplete={'off'}
                      margin="dense"
                      // validators={['required', 'isNumber']}
                      errorMessages={[
                        'это поле обязательно для заполнения',
                        'пожалуйста, введите число'
                      ]}
                      className={s.textField}
                      onChange={handleBudgetPlanAmmount}
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