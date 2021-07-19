
import React, { useEffect } from 'react';
import chartConfig from './chartConfig';
import styles from './chart.module.css';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



const ChartComponent = (props) => {
    const {chartPercentage} = props;
    console.log('Data that comes to diagram: ', chartPercentage);
    
    useEffect(() => {
        const ctx = document.getElementById('myChart');
        if (!chartPercentage) {
            return
        }

        let MyChart = new Chart(ctx, chartConfig(chartPercentage)).getContext("2d");

        return () => {
            if (MyChart) {
                console.log('Will unmount chart: ', MyChart);
                MyChart.chart.destroy();
            }
        }
    }, [chartPercentage]);
    

    // useEffect(() => {
    //     if (chartPercentage && MyChart) {
    //         MyChart.data.labels = chartPercentage.map(transaction => transaction.name);
    //         MyChart.data.datasets[0].data = chartPercentage.map(transaction => transaction.amount);
    //         MyChart.data.datasets[0].backgroundColor = chartPercentage.map(transaction => transaction.color);
    //         MyChart.data.datasets[0].borderColor = chartPercentage.map(transaction => transaction.color);
    //         MyChart.update();
    //     }
    // }, [chartPercentage]);
    
    return (
        <div className={styles.chart_container}>
            <canvas className={styles.canvas} id="myChart"></canvas>
        </div>
    );
};

export default ChartComponent;