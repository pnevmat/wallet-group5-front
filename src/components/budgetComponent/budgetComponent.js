import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getBudgetRequest,
  addBudgetRequest,
  editBudgetRequest,
  deleteBudgetRequest,
} from '../../api/apiRequests';
import {
  getBudget,
  addBudget,
  editBudget,
  deleteBudget,
} from '../../redux/reducers/budgetReducer';

import ProgressBar from './ProgressBarComponent/ProgressBar';
import AddBudgetButton from '../AddBudgetButton/AddBudgetButton';
import EditBudgetButton from '../EditBudgetButton/EditBudgetButton';
import DeleteBudgetButton from '../DeleteBudgetButton/DeleteBudgetButton';
import months from '../../utils/months';

import styles from './BudgetComponent.module.css';

const BudgetComponent = () => {
  const todayDate = Date.now();
  const [month, setMonth] = useState(getDefaultMonth());
  const [year, setYear] = useState(getDefaultYear());

  const numberOfYears = getDefaultYear() - 2000;
  const years = getYearsArray();
  const { budget, total } = useSelector(store => store.budget);

  const dispatch = useDispatch();

  useEffect(() => {
    if (month !== '' && year !== 0) {
      handleSubmit();
    }
  }, [month, year]);

  function getDefaultMonth() {
    return Intl.DateTimeFormat('en-US', { month: 'short' }).format(todayDate);
  }

  function getDefaultYear() {
    return Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(todayDate);
  }

  function getYearsArray() {
    const years = [];

    for (let i = 0; i <= numberOfYears; i += 1) {
      years.push(2000 + i);
    }

    return years;
  }

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'month':
        setMonth(value);
        break;
      case 'year':
        setYear(value);
        break;
      default:
        console.log('error');
    }
  };
  console.log('Default month: ', month);
  console.log('Default year: ', year);
  const handleSubmit = async object => {
    if (object) {
      const { id, date, budget } = object;
      if (object.type === 'addBudget') {
        // запрос на добавление бюджета
        const { data } = await addBudgetRequest({ date, budget });
        if (data) {
          dispatch(addBudget(data));
        }
      }

      if (object.type === 'editBudget') {
        // запрос на редактирование бюджета
        console.log('Budget id: ', id);
        const { data } = await editBudgetRequest({ id, date, budget });
        console.log('Edit budget response data: ', data);
        if (data) {
          dispatch(editBudget(data));
        }
      }

      if (object.type === 'deleteBudget') {
        // запрос на удаление бюджета
        const data = await deleteBudgetRequest(id);
        if (data) {
          dispatch(deleteBudget());
        }
      }
    } else {
      // обработка ивента и запрос на поиск бюджета
      const { data } = await getBudgetRequest({ month, year });
      if (data) {
        dispatch(getBudget(data));
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.actionsContainer}>
        <AddBudgetButton onSubmit={handleSubmit} />
        <EditBudgetButton onSubmit={handleSubmit} />
        <DeleteBudgetButton onSubmit={handleSubmit} />
      </div>
      {budget?.budget?.length > 0 ? (
        <div className={styles.budgetContainer}>
          <span className={styles.budgetTitle}>Бюджет на месяц</span>
          <form className={styles.form}>
            <select
              className={styles.formSelect}
              name="month"
              onChange={e => {
                handleChange(e);
              }}
            >
              <option
                className={styles.formMonthOptions}
                defaultValue={`${months[0].value}`}
              >
                {months[0].text}
              </option>
              {months.map(month => (
                <option
                  key={month.id}
                  value={month.value}
                  className={styles.formMonthOptions}
                >
                  {month.text}
                </option>
              ))}
            </select>
            <select
              className={styles.formSelect}
              name="year"
              onChange={e => {
                handleChange(e);
              }}
            >
              <option defaultValue={`${years[years.length - 1]}`}>
                {years[years.length - 1]}
              </option>
              {years.map((year, index) => {
                return (
                  <option key={index} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </form>
          <ul className={styles.budgetList}>
            {budget.budget.map(item => (
              <li key={item._id} className={styles.budgetListItem}>
                <div className={styles.budgetItemContainer}>
                  <span>{item.category}</span>
                  <span className={styles.budgetItemPlanAmmount}>
                    {item.planAmount}
                  </span>
                </div>
                <div className={styles.budgetItemContainer}>
                  <ProgressBar props={item} />
                  <span
                    className={
                      item.planAmount >= item.factAmount
                        ? styles.summaryAmountRegular
                        : styles.summaryAmountOverspent
                    }
                  >
                    {item.factAmount}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.summaryContainer}>
            <span>И того:</span>
            <span className={styles.budgetItemPlanAmmount}>{total}</span>
          </div>
        </div>
      ) : (
        <div className={styles.budgetContainer}>
          <span className={styles.budgetTitle}>Создайте бюджет</span>
        </div>
      )}
    </div>
  );
};

export default BudgetComponent;
