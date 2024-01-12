import React, { useState, useEffect, useRef } from 'react';

import CategoryForm from './CategoryForm';
import moment from 'moment';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import s from './ModalAddBudget.module.css';

const ModalAddBudget = props => {
  const dateFormat = moment().format('YYYY-MM-DD');
  const [budgetFields, setBudgetFields] = useState({ field0: {} });
  const [currentDate, setCurrentDate] = useState(dateFormat);
  const [budgetFieldsCounter, setBudgetFieldsCounter] = useState([0]);

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

  const handleBudgetPlanAmmount = (e, field) => {
    const { value } = e.currentTarget;
    const newBudgetFields = {
      ...budgetFields,
      [field]: { ...budgetFields[field], budgetPlanAmmount: Number(value) },
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

    setBudgetFields({
      ...budgetFields,
      [`field${budgetFieldsCounter.length}`]: {},
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    let newBudgetFields = [];

    Object.keys(budgetFields).forEach(key =>
      newBudgetFields.push({
        category: budgetFields[key].category,
        planAmount: budgetFields[key].budgetPlanAmmount,
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
      type: 'addBudget',
      date: currentDate,
      budget: newBudgetFields,
    };
    props.onSubmit(newBudgetPlan);
    onClickClose();
  };

  return (
    <div className={s.overlay} onClick={handleCloseModal}>
      <div className={s.modal}>
        <CloseIcon className={s.closeModalIcon} onClick={onClickClose} />
        <ValidatorForm
          ref={formRef}
          onSubmit={handleSubmitForm}
          onError={errors => console.log(errors)} // Подключить тостифай вместо консоль лога
        >
          <h2 className={s.title}>Запланировать бюджет</h2>
          <div className={s.formContainer}>
            <div className={s.formFieldWrapper}>
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
                  onChange={e => setCurrentDate(e.currentTarget.value)}
                />
              </div>
              {budgetFieldsCounter.map(item => {
                return (
                  <div key={item} className={s.formFieldContainer}>
                    <div className={s.categoryContainer}>
                      <CategoryForm
                        categorieCounter={item}
                        categoryChange={onSetCategory}
                      />
                    </div>
                    <div className={s.formTextContainer}>
                      <TextValidator
                        label="0.00"
                        name={'budgetPlanAmmount' + item}
                        value={budgetFields['field' + item].budgetPlanAmmount}
                        autoComplete={'off'}
                        margin="dense"
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

export default ModalAddBudget;
