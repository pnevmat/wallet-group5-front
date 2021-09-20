import React, { useState, useEffect, useRef } from 'react';
// import { createPortal } from 'react-dom';

import CategoryForm from './CategoryForm';
import moment from 'moment';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

import s from './ModalEditBudget.module.css';

const ModalEditBudget = (props) => {

  const budgetItemsArray = [
    {id: 1, categorie: 'Основные расходы', planAmmount: 1000, factAmmount: 500},
    {id: 2, categorie: 'Продукты', planAmmount: 500, factAmmount: 500},
    {id: 3, categorie: 'Машина', planAmmount: 2000, factAmmount: 700},
    {id: 4, categorie: 'Забота о себе', planAmmount: 3000, factAmmount: 1500},
    {id: 5, categorie: 'Забота о детях', planAmmount: 700, factAmmount: 800},
    {id: 6, categorie: 'Товары для дома', planAmmount: 1500, factAmmount: 1500},
    {id: 7, categorie: 'Образование', planAmmount: 1900, factAmmount: 1500}
  ]

  const categorieInitialState = () => {
    let categories = {}
    budgetItemsArray.map((item, i) => {
      categories = {...categories, ['category' + i]: item.categorie}
    })
    return categories
  }
  const [category, setCategory] = useState(categorieInitialState)

  const budgetPlanAmmountInitialState = () => {
    let planAmmounts = {}
    budgetItemsArray.map((item, i) => {
      planAmmounts = {...planAmmounts, ['budgetPlanAmmount' + i]: item.planAmmount}
    })
    return planAmmounts
  }
  const [budgetPlanAmmount, setBudgetPlanAmmount] = useState(budgetPlanAmmountInitialState);

//   Заменить dateFormat на дату полученную из store
  const dateFormat = moment().format('YYYY-MM-DD');
  const [budgetDate, setBudgetDate] = useState(dateFormat);
  const [budgetFieldsCounter, setBudgetFieldsCounter] = useState(budgetItemsArray.length);

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

  const handleBudgetPlanAmmount = e => {
    const { name, value } = e.currentTarget;
    const newbudgetPlanAmmount = {...budgetPlanAmmount, [name]: Number(value)}
    setBudgetPlanAmmount(newbudgetPlanAmmount);
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
        categoryKey.slice(-1) === budgetPlanAmmountKey.slice(-1) &&
        budgetFields.push({
          [categoryKey]: category[categoryKey],
          [budgetPlanAmmountKey]: budgetPlanAmmount[budgetPlanAmmountKey]
        })
      }
    }

    budgetFields.sort((nextItem, prevItem) => {
      const stringPrevItem = JSON.stringify(prevItem);
      const stringNextItem = JSON.stringify(nextItem);

      if (stringPrevItem > stringNextItem) {
        return -1
      };

      if (stringPrevItem < stringNextItem) {
        return 1
      };
        
      return 0
    });

    console.log('On submit data array: ', budgetFields);

    const newBudgetPlan = {
      date: budgetDate,
      type: 'editBudget',
      data: budgetFields
    };
    onClickClose();
    props.addTransaction(newBudgetPlan);
    
  };

  const handleEditBudgetField = () => {
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
          <h2 className={s.title}>Редактировать бюджет</h2>
          <div className={s.formContainer}>
            {budgetItemsArray.map((item, i) => {
              return (
                <div key={item.id} className={s.formFieldContainer}>
                  <div className={s.categoryContainer}>
                      <CategoryForm categorie={item.categorie} categorieCounter={i} categoryChange={onSetCategory} />
                  </div>
                  <div className={s.formTextContainer}>
                    <TextValidator
                      label={item.planAmmount}
                      name={"budgetPlanAmmount" + i}
                      value={budgetPlanAmmount[budgetPlanAmmount + i]}
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
            <button className={s.addBtn} type="button" onClick={handleEditBudgetField} >
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

export default ModalEditBudget;