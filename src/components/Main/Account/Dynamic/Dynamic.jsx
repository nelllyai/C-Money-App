import { useState } from 'react';
import style from './Dynamic.module.css';
import LineChart from './LineChart';

export const Dynamic = ({transactions}) => {
  const years = [...new Set(transactions.map(tr => new Date(tr.date).getFullYear()))];
  const [selectYear, setSelectYear] = useState(years[0]);
  const handleSelectChange = event => {
    setSelectYear(+event.target.value);
  };

  return (
    <div className={style.dynamic}>
      <div className={style.header}>
        <h3 className={style.title}>Динамика</h3>
        <span className={style.year}>{selectYear}</span>

        <select
          className={style.select}
          value={selectYear}
          onChange={handleSelectChange}
        >
          {
            years.map(year => <option key={year}>{year}</option>)
          }
        </select>
      </div>

      <LineChart year={selectYear} transactions={transactions} />
    </div>
  );
};
