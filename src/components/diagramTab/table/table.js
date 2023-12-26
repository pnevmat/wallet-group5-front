import React, { useState, useEffect } from 'react';

import styles from './Table.module.css';

const Table = props => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState(0);
  const { table, cost, income, onSubmit } = props;

  const todayDate = Date.now();
  const normalDate = Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(
    todayDate,
  );

  const numberOfYears = normalDate - 2000;

  const years = [];

  for (let i = 0; i <= numberOfYears; i += 1) {
    years.push(2000 + i);
  }

  const handleCange = e => {
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
      handleSubmit();
    }
  }, [month, year]);

  const handleSubmit = () => {
    onSubmit({ month, year });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <select
          className={styles.formSelect}
          name="month"
          onChange={e => {
            handleCange(e);
          }}
        >
          <option className={styles.formMonthOptions} defaultValue="Month">
            Месяц
          </option>
          <option value="Jan" className={styles.formMonthOptions}>
            Январь
          </option>
          <option value="Feb" className={styles.formMonthOptions}>
            Февраль
          </option>
          <option value="Mar" className={styles.formMonthOptions}>
            Март
          </option>
          <option value="Apr" className={styles.formMonthOptions}>
            Апрель
          </option>
          <option value="May" className={styles.formMonthOptions}>
            Май
          </option>
          <option value="June" className={styles.formMonthOptions}>
            Июнь
          </option>
          <option value="July" className={styles.formMonthOptions}>
            Июль
          </option>
          <option value="Aug" className={styles.formMonthOptions}>
            Август
          </option>
          <option value="Sept" className={styles.formMonthOptions}>
            Сентябрь
          </option>
          <option value="Oct" className={styles.formMonthOptions}>
            Октябрь
          </option>
          <option value="Nov" className={styles.formMonthOptions}>
            Ноябрь
          </option>
          <option value="Dec" className={styles.formMonthOptions}>
            Декабрь
          </option>
        </select>
        <select
          className={styles.formSelect}
          name="year"
          onChange={e => {
            handleCange(e);
          }}
        >
          <option defaultValue="Year">Год</option>
          {years.map((year, index) => {
            return <option key={index}>{year}</option>;
          })}
        </select>
      </form>
      <div className={styles.tableHeadersContainer}>
        <span className={styles.tableHeaderText}>Категория</span>
        <span className={styles.tableHeaderText}>Сумма</span>
      </div>
      <ul className={styles.tableContainer}>
        {table
          ? table.map(item => {
              let color = { backgroundColor: item.color };
              return (
                <li className={styles.tableItem} key={item.id}>
                  <div className={styles.itemInnerContainer}>
                    <span
                      className={styles.itemColorLable}
                      style={color}
                    ></span>
                    <div className={styles.itemTextContainer}>
                      <span className={styles.tableItemsText}>{item.name}</span>
                      <span className={styles.tableItemsText}>
                        {item.amount}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })
          : ''}
      </ul>
      <div className={styles.totalsGroupContainer}>
        <div className={styles.totalsContainer}>
          <span>Расходы:</span>
          <span className={styles.costTotalText}>{cost}</span>
        </div>
        <div className={styles.totalsContainer}>
          <span>Доходы:</span>
          <span className={styles.incomeTotalText}>{income}</span>
        </div>
      </div>
    </div>
  );
};

export default Table;
