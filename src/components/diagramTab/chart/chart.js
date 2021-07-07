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
                    backgroundColor: transactionsData.map(transaction => transaction.color),
                    hoverOffset: 4
                    // borderColor: [
                    //     'rgba(255, 99, 132, 1)',
                    //     'rgba(54, 162, 235, 1)',
                    //     'rgba(255, 206, 86, 1)',
                    //     'rgba(75, 192, 192, 1)',
                    //     'rgba(153, 102, 255, 1)',
                    //     'rgba(255, 159, 64, 1)'
                    // ],
                    // borderWidth: 3
                }]
            },
            options: {
                // scales: {
                //     y: {
                //         beginAtZero: true
                //     }
                // }
            }
        });
    }, [])
    
    return (
        <div>
            <canvas id="myChart"></canvas>
        </div>
    );
};

export default ChartComponent;