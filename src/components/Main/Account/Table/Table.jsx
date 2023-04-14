import Row from './Row';
import style from './Table.module.css';
import PropTypes from 'prop-types';

export const Table = ({ transactions }) => {
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
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  transactions: PropTypes.array,
};
