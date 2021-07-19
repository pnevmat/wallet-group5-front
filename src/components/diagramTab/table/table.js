import React from 'react';

import styles from './table.module.css';

const Table = (props) => {
    const {table, cost, income} = props;
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input />
                <input />
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