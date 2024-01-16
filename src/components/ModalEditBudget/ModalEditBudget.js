import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import CategoryForm from './CategoryForm';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { validate } from '../../utils/validation/categoryFormValidate';

import s from './ModalEditBudget.module.css';

const ModalEditBudget = props => {
  const { budget } = useSelector(store => store.budget);

  const [budgetDate, setBudgetDate] = useState(budget.date);
  const [budgetFields, setBudgetFields] = useState(getBudgetFieldsInitState());
  const [budgetFieldsCounter, setBudgetFieldsCounter] = useState(
    getBudgetFieldsCounterInitState(),
  );
  const [validField, setValidField] = useState(setValidFieldInitState());

  const formRef = useRef('form');

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

  function setValidFieldInitState() {
    let initState = {};
    budgetFieldsCounter.forEach(item => {
      initState = { ...initState, ['category' + item]: '' };
    });

    return initState;
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
    const { name, value } = e.target;
    const newBudgetFields = {
      ...budgetFields,
      [field]: { ...budgetFields[field], category: value },
    };
    setBudgetFields(newBudgetFields);

    if (validField[name]) {
      setValidField({ ...validField, [name]: '' });
    }
  };

  const handleBlur = e => {
    const { name, value } = e.target;

    if (
      (name === Object.keys(validField).find(key => key === name) &&
        value === '') ||
      (name === Object.keys(validField).find(key => key === name) &&
        value === 'Выберите категорию')
    ) {
      setValidField({ ...validField, [name]: validate.select() });
    }

    if (
      name === Object.keys(validField).find(key => key === name) &&
      value !== '' &&
      value !== 'Выберите категорию'
    ) {
      setValidField({ ...validField, [name]: '' });
    }
  };

  const handleAddBudgetField = () => {
    setBudgetFieldsCounter([
      ...budgetFieldsCounter,
      budgetFieldsCounter.length,
    ]);

    setValidField({
      ...validField,
      ['category' + budgetFieldsCounter.length]: '',
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const invalidKeys = Object.keys(budgetFields).filter(
      key => !budgetFields[key].category,
    );

    if (invalidKeys.length > 0) {
      let validFieldData = {};
      Object.keys(budgetFields).forEach((key, i) => {
        if (!budgetFields[key].category) {
          validFieldData = {
            ...validFieldData,
            ['category' + i]: validate.select(),
          };
        }
      });
      setValidField(validFieldData);
      return;
    }

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
        <ValidatorForm ref={formRef} onSubmit={handleSubmitForm}>
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
                        validCategory={validField}
                        categoryChange={e => onSetCategory(e, `field${item}`)}
                        blur={handleBlur}
                      />
                    </div>
                    <div className={s.formTextContainer}>
                      <TextValidator
                        label={item.planAmount ? item.planAmount : '0'}
                        name={'budgetPlanAmmount' + i}
                        value={budgetFields['field' + i]?.budgetPlanAmount}
                        autoComplete={'off'}
                        margin="dense"
                        validators={['required', 'isNumber']}
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
