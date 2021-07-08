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
            {id: 2, categorie: 'Комуналка', sum: 2000, color: '#32c5f1'},
            {id: 3, categorie: 'Питание', sum: 1000, color: '#8c52f8'}
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