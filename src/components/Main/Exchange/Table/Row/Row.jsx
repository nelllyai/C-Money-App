import style from './Row.module.css';
import PropTypes from 'prop-types';

export const Row = ({ currency }) => {
  console.log(style);
  return (
    <tr>
      <td className={style.code}>{currency.code}</td>
      <td className={style.amount}>{currency.amount}</td>
    </tr>
  );
};

Row.propTypes = {
  currency: PropTypes.object,
};
