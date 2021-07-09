import React from 'react';

import ChartComponent from './chart/chart';
import Table from './table/table';

const DiagramTab = () => {
    const table = {
        categories: [
            {id: 1, categorie: 'Авто', sum: 300, color: '#0ea150'},
            {id: 2, categorie: 'Комуналка', sum: 2000, color: '#32c5f1'},
            {id: 3, categorie: 'Питание', sum: 1000, color: '#8c52f8'}
        ]
    };

    const chartPercentage = {
        total: 5000,
        transactionsData: [
            {id: 1, categorie: 'Авто', sum: 300, color: '#0ea150'},
            {id: 2, categorie: 'Комуналка', sum: 500, color: '#32c5f1'},
            {id: 3, categorie: 'Питание', sum: 700, color: '#8c52f8'},
            {id: 3, categorie: 'расход4', sum: 1000, color: '#3017bd'},
            {id: 3, categorie: 'расход5', sum: 800, color: '#f02ae6'},
            {id: 3, categorie: 'расход6', sum: 900, color: '#7b5fad'},
            {id: 3, categorie: 'расход7', sum: 1100, color: '#b2e71f'}
        ]
    };

    return (
        <>
        <ChartComponent chartPercentage={chartPercentage} />
        <Table table={table} />
        </>
    );
};

export default DiagramTab;