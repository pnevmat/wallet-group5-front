import React from 'react';

import styles from './reportsComponent.module.css';

const ReportsComponent = () => {
    const reportItemsArray = [
        {id: 1, categorie: 'Категория1', planAmmount: 1000, factAmmount: 500},
        {id: 2, categorie: 'Категория2', planAmmount: 500, factAmmount: 500},
        {id: 3, categorie: 'Категория3', planAmmount: 2000, factAmmount: 700},
        {id: 4, categorie: 'Категория4', planAmmount: 3000, factAmmount: 1500},
        {id: 5, categorie: 'Категория5', planAmmount: 700, factAmmount: 800},
        {id: 6, categorie: 'Категория6', planAmmount: 1500, factAmmount: 1500},
        {id: 7, categorie: 'Категория7', planAmmount: 1900, factAmmount: 1500}
    ]
    return (
        <div>
            <h1>Эта страница еще находится в разработке</h1>
        </div>
    );
};

export default ReportsComponent;