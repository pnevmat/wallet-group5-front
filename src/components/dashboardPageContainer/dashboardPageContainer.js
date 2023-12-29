import React from 'react';

import StatisticsComponent from '../StatisticsComponent/StatisticsComponent';
import TransactionTable from '../TransactionTable/TransactionTable';
import AddTransactionButton from '../AddTransactionButton/AddTransactionButton';
import CategorieActionButton from '../CategorieActionButton/CategorieActionButton';

import styles from './DashboardPageContainer.module.css';

const DashboardPageContainer = props => {
  const categorieActions = {
    add: 'Добавить категорию',
    edit: 'Редактировать',
    delete: 'Удалить',
  };
  return (
    <div className={styles.dashboardContainer}>
      <StatisticsComponent balance={props.balance} />
      <div className={styles.tableContainer}>
        <div className={styles.buttonsContainer}>
          {Object.keys(categorieActions).map(key => (
            <CategorieActionButton
              key={key}
              buttonText={categorieActions[key]}
              actionType={key}
            />
          ))}
        </div>
        <TransactionTable />
      </div>
      <AddTransactionButton />
    </div>
  );
};

export default DashboardPageContainer;
