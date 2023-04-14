import Row from './Row';
import style from './Table.module.css';
import PropTypes from 'prop-types';

export const Table = ({ account, transactions }) => {
  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th className={style.th}>Счет</th>
            <th className={style.th}>Сумма</th>
            <th className={style.th}>Дата</th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {
            transactions.map((transaction, index) => (
              <Row key={index} transaction={transaction} />
            ))
          }
          {/* <tr>
            <td className={style.td}>78533416338616366622402206</td>
            <td className={style['td-middle']}>725.03</td>
            <td className={style['td-date']}>23.07.2022</td>
          </tr>
          <tr>
            <td className={style.td}>03076315655672621035503853</td>
            <td className={style['td-middle']}>754.63</td>
            <td className={style['td-date']}>23.07.2022</td>
          </tr>
          <tr>
            <td className={style.td}>77143036472230035143835017</td>
            <td className={style['td-middle']}>575.73</td>
            <td className={style['td-date']}>23.07.2022</td>
          </tr>
          <tr>
            <td className={style.td}>06815665521313043767184340</td>
            <td className={style['td-middle']}>128.14</td>
            <td className={style['td-date']}>23.07.2022</td>
          </tr>
          <tr>
            <td className={style.td}>08045754042622752807473705</td>
            <td className={style['td-middle']}>602.33</td>
            <td className={style['td-date']}>23.07.2022</td>
          </tr>
          <tr>
            <td className={style.td}>38623857350546387857144303</td>
            <td className={style['td-middle']}>318.7</td>
            <td className={style['td-date']}>23.07.2022</td>
          </tr>
          <tr>
            <td className={style.td}>37557537730030217658338836</td>
            <td className={style['td-middle']}>358.79</td>
            <td className={style['td-date']}>23.07.2022</td>
          </tr>
          <tr>
            <td className={style.td}>16866556611742274532042336</td>
            <td className={style['td-middle']}>518.05</td>
            <td className={style['td-date']}>23.07.2022</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  transactions: PropTypes.array,
};
