import styles from './chart.module.css';

import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const ChartComponent = (props) => {
    useEffect(() => {
        const {chartPercentage} = props;
        if (chartPercentage) {
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: chartPercentage.map(transaction => transaction.name),
                    datasets: [{
                        label: '# of Votes',
                        data: chartPercentage.map(transaction => transaction.amount),
                        radius: 225,
                        backgroundColor: chartPercentage.map(transaction => transaction.color),
                        hoverOffset: 4,
                        borderColor: chartPercentage.map(transaction => transaction.color),
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
       }
    }, [])
    
    return (
        <div className={styles.chart_container}>
            <canvas className={styles.canvas} id="myChart"></canvas>
        </div>
    );
};

export default ChartComponent;