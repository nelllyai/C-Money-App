import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { v4 as uuid } from 'uuid';
import { round } from '../../../../../utils/round';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      xAlign: 'center',
      yAlign: 'bottom',
      displayColors: false,
      backgroundColor: '#210B36',
      bodyFont: {
        family: 'Nunito',
        weight: '700',
        size: 15,
      },
      callbacks: {
        title: () => null,
        label: context => context.formattedValue + ' ₽',
      },
    }
  },
};

const data = {
  labels: [],
  datasets: [{
    borderColor: '#B865D6',
  }]
};


export const LineChart = ({ year, transactions }) => {
  data.labels = [];

  const lastTransfers = [];

  for (let i = 0; i < 12; i++) {
    const lastTransferInMonth =
      transactions
        .filter(tr => new Date(tr.date).getFullYear() === year)
        .filter(tr => new Date(tr.date).getMonth() === i)
        .slice(-1)[0];
    
    if (lastTransferInMonth !== undefined) lastTransfers.push(lastTransferInMonth);
  }

  data.datasets[0].data = lastTransfers
    .map(tr => {
      const date = tr.date;
      const month = new Date(date).toLocaleString('default', { month: 'short' });
      return { x: month, y: round(tr.amount) }
    });

  return (
    <Line
      key={uuid()}
      options={options}
      data={data}
      redraw
    />
  );
};
