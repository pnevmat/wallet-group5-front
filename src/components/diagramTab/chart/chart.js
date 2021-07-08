import styles from './chart.module.css';

import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const ChartComponent = (props) => {
    useEffect(() => {
        const {transactionsData} = props.chartPercentage;
        var ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: transactionsData.map(transaction => transaction.categorie),
                datasets: [{
                    label: '# of Votes',
                    data: transactionsData.map(transaction => transaction.sum),
                    radius: 225,
                    backgroundColor: transactionsData.map(transaction => transaction.color),
                    hoverOffset: 4,
                    borderColor: transactionsData.map(transaction => transaction.color),
                    borderWidth: 2,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                        labels: {
                            color: '#000001'
                        }
                    }
                }
            }
        });
    }, [])
    
    return (
        <div className={styles.chart_container}>
            <canvas className={styles.canvas} id="myChart"></canvas>
        </div>
    );
};

export default ChartComponent;