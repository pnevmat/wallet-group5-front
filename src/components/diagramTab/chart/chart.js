import styles from './chart.module.css';

import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const ChartComponent = (props) => {
    useEffect(() => {
        const {data} = props.chartPercentage;
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.categories.map(transaction => transaction.categorie),
                datasets: [{
                    label: '# of Votes',
                    data: data.categories.map(transaction => transaction.amount),
                    radius: 225,
                    backgroundColor: data.categories.map(transaction => transaction.color),
                    hoverOffset: 4,
                    borderColor: data.categories.map(transaction => transaction.color),
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