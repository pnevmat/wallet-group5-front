
import React, { useEffect } from 'react';
import chartConfig from './chartConfig';
import styles from './chart.module.css';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



const ChartComponent = (props) => {
    const {chartPercentage} = props;
    
    useEffect(() => {
        const ctx = document.getElementById('myChart');
        if (!chartPercentage) {
            return
        }

        let MyChart = new Chart(ctx, chartConfig(chartPercentage)).getContext("2d");

        return () => {
            if (MyChart) {
                MyChart.chart.destroy();
            }
        }
    }, [chartPercentage]);
    
    return (
        <div className={styles.chart_container}>
            <span className={styles.chart_title}>Статистика</span>
            <canvas className={styles.canvas} id="myChart"></canvas>
        </div>
    );
};

export default ChartComponent;