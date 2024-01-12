import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
// import { createPortal } from 'react-dom';

import CategoryForm from './CategoryForm';
import moment from 'moment';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import s from './ModalEditBudget.module.css';
// Исправить апдейт полей бюджета, потому что при смене категории в боди приходит нул
const ModalEditBudget = props => {
  const { budget } = useSelector(store => store.budget);
  //   Заменить dateFormat на дату полученную из store
  // const dateFormat = moment().format('YYYY-MM-DD');
  const [budgetDate, setBudgetDate] = useState(budget.date);
  const [budgetFields, setBudgetFields] = useState(getBudgetFieldsInitState());
  const [budgetFieldsCounter, setBudgetFieldsCounter] = useState(
    getBudgetFieldsCounterInitState(),
  );

  const formRef = useRef('form');

  // const budgetItemsArray = [
  //   {
  //     id: 1,
  //     category: 'Основные расходы',
  //     planAmount: 1000,
  //     factAmount: 500,
  //   },
  //   { id: 2, category: 'Продукты', planAmount: 500, factAmount: 500 },
  //   { id: 3, category: 'Машина', planAmount: 2000, factAmount: 700 },
  //   { id: 4, category: 'Забота о себе', planAmount: 3000, factAmount: 1500 },
  //   { id: 5, category: 'Забота о детях', planAmount: 700, factAmount: 800 },
  //   {
  //     id: 6,
  //     category: 'Товары для дома',
  //     planAmount: 1500,
  //     factAmount: 1500,
  //   },
  //   { id: 7, category: 'Образование', planAmount: 1900, factAmount: 1500 },
  // ];

  useEffect(() => {
    document.addEventListener('keydown', onKeyClick);

    return () => {
      document.removeEventListener('keydown', onKeyClick);
    };
  }, []);

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

  function getBudgetFieldsInitState() {
    let fields = {};
    budget.budget.forEach((item, i) => {
      fields = {
        ...fields,
        ['field' + i]: {
          category: item.category,
          budgetPlanAmount: item.planAmount,
        },
      };
    });

    return fields;
  }

  function getBudgetFieldsCounterInitState() {
    let fieldsCounterArray = [];

    for (let i = 0; i < budget.budget.length; i++) {
      fieldsCounterArray.push(i);
    }

    return fieldsCounterArray;
  }

  const handleBudgetPlanAmmount = (e, field) => {
    const { value } = e.currentTarget;
    const newBudgetFields = {
      ...budgetFields,
      [field]: { ...budgetFields[field], budgetPlanAmount: Number(value) },
    };
    setBudgetFields(newBudgetFields);
  };

  const onSetCategory = (e, field) => {
    const { value } = e.target;
    const newBudgetFields = {
      ...budgetFields,
      [field]: { ...budgetFields[field], category: value },
    };
    setBudgetFields(newBudgetFields);
  };

  const handleAddBudgetField = () => {
    setBudgetFieldsCounter([
      ...budgetFieldsCounter,
      budgetFieldsCounter.length,
    ]);
  };
  console.log('Budget fields: ', budgetFields);
  const handleSubmitForm = e => {
    e.preventDefault();
    let newBudgetFields = [];

    Object.keys(budgetFields).forEach(key =>
      newBudgetFields.push({
        category: budgetFields[key].category,
        planAmount: budgetFields[key].budgetPlanAmount,
      }),
    );

    newBudgetFields.sort((nextItem, prevItem) => {
      const stringPrevItem = JSON.stringify(prevItem);
      const stringNextItem = JSON.stringify(nextItem);

      if (stringPrevItem > stringNextItem) {
        return -1;
      }

      if (stringPrevItem < stringNextItem) {
        return 1;
      }

      return 0;
    });

    console.log('On submit data array: ', newBudgetFields);

    const newBudgetPlan = {
      type: 'editBudget',
      date: budgetDate,
      budget: newBudgetFields,
    };
    props.onSubmit({ id: budget.id, ...newBudgetPlan });
    onClickClose();
  };

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
            <div className={s.formFieldWrapper}>
              {budgetFieldsCounter.map((item, i) => {
                return (
                  <div key={i} className={s.formFieldContainer}>
                    <div className={s.categoryContainer}>
                      <CategoryForm
                        categoryCounter={item}
                        category={budget.budget[i]?.category}
                        categoryChange={e => onSetCategory(e, `field${item}`)}
                      />
                    </div>
                    <div className={s.formTextContainer}>
                      <TextValidator
                        label={item.planAmount ? item.planAmount : '0'}
                        name={'budgetPlanAmmount' + i}
                        value={budgetFields['field' + i]?.budgetPlanAmount}
                        autoComplete={'off'}
                        margin="dense"
                        // validators={['required', 'isNumber']}
                        errorMessages={[
                          'это поле обязательно для заполнения',
                          'пожалуйста, введите число',
                        ]}
                        className={s.textField}
                        onChange={e =>
                          handleBudgetPlanAmmount(e, `field${item}`)
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={s.btnContainer}>
            <button
              className={s.addBtn}
              type="button"
              onClick={handleAddBudgetField}
            >
              <AddIcon />
            </button>
          </div>
          <button className={s.submitButton} type="submit">
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
};

export default ModalEditBudget;
