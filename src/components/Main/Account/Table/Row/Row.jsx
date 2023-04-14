import { useSelector } from 'react-redux';
import formatDate from '../../../../../utils/formatDate';
import style from './Row.module.css';
import PropTypes from 'prop-types';

export const Row = ({ transaction }) => {
  const account = useSelector(state => state.account.account).account;

  const {
    date,
    from,
    to,
    amount
  } = transaction;

  const isOutgoing = from === account;

  return (
    <tr className={isOutgoing ? style.red : undefined}>
      <td className={style.td}>
        {
          isOutgoing ?
          to : from
        }
      </td>
      <td className={style['td-middle']}>
        {isOutgoing && '-'}
        {amount}
      </td>
      <td className={style['td-date']}>{formatDate(date)}</td>
    </tr>
  );
};

Row.propTypes = {
  transaction: PropTypes.object,
};
