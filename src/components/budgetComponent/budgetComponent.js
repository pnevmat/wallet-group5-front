import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getBudgetRequest } from '../../api/apiRequests';
import { getBudget } from '../../redux/reducers/budgetReducer';
import addBudgetOperation from '../../redux/operations/budgetOperations/addBudgetOperation';
import editBudgetOperation from '../../redux/operations/budgetOperations/editBudgetOperation';
import deleteBudgetOperation from '../../redux/operations/budgetOperations/deleteBudgetOperation';

import ProgressBar from './ProgressBarComponent/ProgressBar';
import AddBudgetButton from '../AddBudgetButton/AddBudgetButton';
import EditBudgetButton from '../EditBudgetButton/EditBudgetButton';
import DeleteBudgetButton from '../DeleteBudgetButton/DeleteBudgetButton';

import styles from './BudgetComponent.module.css';

const BudgetComponent = () => {
  const dispatch = useDispatch();

  const todayDate = Date.now();
  const monthDefault = Intl.DateTimeFormat('en-US', { month: 'short' }).format(
    todayDate,
  );
  const yearDefault = Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(
    todayDate,
  );

  const [month, setMonth] = useState(monthDefault);
  const [year, setYear] = useState(yearDefault);

  const normalDate = Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(
    todayDate,
  );
  console.log('Normal date: ', normalDate);

  const numberOfYears = normalDate - 2000;

  const years = [];

  for (let i = 0; i <= numberOfYears; i += 1) {
    years.push(2000 + i);
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

  useEffect(() => {
    if (month !== '' && year !== 0) {
      // handleSubmit();
    }
  }, [month, year]);

  const handleSubmit = async object => {
    if (object) {
      switch (object.type) {
        case 'addBudget':
          // запрос на добавление бюджета
          dispatch(addBudgetOperation(object));
          break;
        case 'editBudget':
          // запрос на редактирование бюджета
          dispatch(editBudgetOperation(object));
          break;
        case 'deleteBudget':
          // запрос на удаление бюджета
          dispatch(deleteBudgetOperation(object.id));
          break;

        default:
          break;
      }
    } else {
      // обработка ивента и запрос на поиск бюджета
      const data = await getBudgetRequest({ month, year });
      console.log('Get budget data: ', data);
      // dispatch(getBudget(data));
      // console.log(month);
      // console.log(year);
      // console.log('Get budget started');
    }
  };

  const months = [
    { id: 1, value: 'Jan', text: 'Январь' },
    { id: 2, value: 'Feb', text: 'Февраль' },
    { id: 3, value: 'Mar', text: 'Март' },
    { id: 4, value: 'Apr', text: 'Апрель' },
    { id: 5, value: 'May', text: 'Май' },
    { id: 6, value: 'June', text: 'Июнь' },
    { id: 7, value: 'July', text: 'Июль' },
    { id: 8, value: 'Aug', text: 'Август' },
    { id: 9, value: 'Sept', text: 'Сентябрь' },
    { id: 10, value: 'Oct', text: 'Октябрь' },
    { id: 11, value: 'Nov', text: 'Ноябрь' },
    { id: 12, value: 'Dec', text: 'Декабрь' },
  ];

  const budgetItemsArray = [
    { id: 1, categorie: 'Категория1', planAmmount: 1000, factAmmount: 500 },
    { id: 2, categorie: 'Категория2', planAmmount: 500, factAmmount: 500 },
    { id: 3, categorie: 'Категория3', planAmmount: 2000, factAmmount: 700 },
    { id: 4, categorie: 'Категория4', planAmmount: 3000, factAmmount: 1500 },
    { id: 5, categorie: 'Категория5', planAmmount: 700, factAmmount: 800 },
    { id: 6, categorie: 'Категория6', planAmmount: 1500, factAmmount: 1500 },
    { id: 7, categorie: 'Категория7', planAmmount: 1900, factAmmount: 1500 },
  ];

  let total = 0;
  budgetItemsArray.map((item, i) => (total += item.planAmmount));

  return (
    <div className={styles.container}>
      <div className={styles.actionsContainer}>
        <AddBudgetButton onSubmit={handleSubmit} />
        <EditBudgetButton onSubmit={handleSubmit} />
        <DeleteBudgetButton onSubmit={handleSubmit} />
      </div>
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
            <option className={styles.formMonthOptions} defaultValue="Month">
              Месяц
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
            <option defaultValue="Year">Год</option>
            {years.map((year, index) => {
              return <option key={index}>{year}</option>;
            })}
          </select>
        </form>
        <ul className={styles.budgetList}>
          {budgetItemsArray.map(item => (
            <li key={item.id} className={styles.budgetListItem}>
              <div className={styles.budgetItemContainer}>
                <span>{item.categorie}</span>
                <span className={styles.budgetItemPlanAmmount}>
                  {item.planAmmount}
                </span>
              </div>
              <div className={styles.budgetItemContainer}>
                <ProgressBar props={item} />
                <span
                  className={
                    item.planAmmount >= item.factAmmount
                      ? styles.summaryAmountRegular
                      : styles.summaryAmountOverspent
                  }
                >
                  {item.factAmmount}
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
    </div>
  );
};

export default BudgetComponent;
