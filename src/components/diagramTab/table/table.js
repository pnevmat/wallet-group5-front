import React from 'react';

import styles from './table.module.css';

const Table = (props) => {
    const {table, cost, income} = props;
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <select className={styles.formSelect}>
                    <option className={styles.formMonthOptions} selected>Месяц</option>
                    <option className={styles.formMonthOptions}>Январь</option>
                    <option className={styles.formMonthOptions}>Февраль</option>
                    <option className={styles.formMonthOptions}>Март</option>
                    <option className={styles.formMonthOptions}>Апрель</option>
                    <option className={styles.formMonthOptions}>Май</option>
                    <option className={styles.formMonthOptions}>Июнь</option>
                    <option className={styles.formMonthOptions}>Июль</option>
                    <option className={styles.formMonthOptions}>Август</option>
                    <option className={styles.formMonthOptions}>Сентябрь</option>
                    <option className={styles.formMonthOptions}>Октябрь</option>
                    <option className={styles.formMonthOptions}>Ноябрь</option>
                    <option className={styles.formMonthOptions}>Декабрь</option>
                </select>
                <select className={styles.formSelect}>
                    <option>Год</option>
                </select>
            </form>
            <div className={styles.tableHeadersContainer}>
                <span className={styles.tableHeaderText}>Категория</span>
                <span className={styles.tableHeaderText}>Сумма</span>
            </div>
            <ul className={styles.tableContainer}>
                {table ? table.map(item => {
                    let color = {backgroundColor: item.color};
                    return (
                        <li className={styles.tableItem} key={item.id}>
                            <div className={styles.itemInnerContainer}>
                                <span className={styles.itemColorLable} style={color}></span>
                                <div className={styles.itemTextContainer}>
                                    <span className={styles.tableItemsText}>{item.name}</span>
                                    <span className={styles.tableItemsText}>{item.amount}</span>
                                </div>
                            </div>
                        </li>
                    );
                }) : ''}
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