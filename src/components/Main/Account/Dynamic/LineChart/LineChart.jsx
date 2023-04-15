import style from './LineChart.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const labels = [];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const data = {
  labels,
  datasets: [{
    borderColor: '#B865D6',
  }]
};


export const LineChart = ({ year, transactions }) => {
  data.datasets[0].data = [];

  data.datasets[0].data = transactions
    .filter(tr => new Date(tr.date).getFullYear() === year)
    .map(tr => {
      const date = tr.date;
      const month = new Date(date).toLocaleString('default', { month: 'short' });
      return { x: month, y: tr.amount }
    });

  return (
    <Line
      key={Math.random()}
      options={options}
      data={data}
      redraw
    />
  );
};
