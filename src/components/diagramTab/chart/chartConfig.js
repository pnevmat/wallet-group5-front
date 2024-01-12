import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const chartConfig = data => {
  return {
    type: 'doughnut',
    data: {
      labels: data.map(transaction => transaction.name),
      datasets: [
        {
          label: '# of Votes',
          data: data.map(transaction => transaction.amount),
          radius: 215,
          backgroundColor: data.map(transaction => transaction.color),
          hoverOffset: 4,
          borderColor: data.map(transaction => transaction.color),
          borderWidth: 2,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
          labels: {
            color: '#000001',
          },
        },
      },
    },
  };
};

export default chartConfig;
