import style from './Row.module.css';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { round } from '../../../../../utils/round';

export const Row = ({ currency }) => {
  return (
    <tr key={uuid()}>
      <td className={style.code}>{currency.code}</td>
      <td className={style.amount}>{round(currency.amount)}</td>
    </tr>
  );
};

Row.propTypes = {
  currency: PropTypes.object,
};
