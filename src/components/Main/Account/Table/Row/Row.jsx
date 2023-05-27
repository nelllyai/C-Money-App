import { useSelector } from 'react-redux';
import formatDate from '../../../../../utils/formatDate';
import style from './Row.module.css';
import PropTypes from 'prop-types';
import { round } from '../../../../../utils/round';

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
    <tr>
      <td className={style.td}>
        {
          isOutgoing ?
            to : from
        }
      </td>
      <td className={style['td-middle']}>
        <span className={isOutgoing ? style.outgoing : undefined}>
          {isOutgoing ? '-' : '+'}
          {round(amount)}
        </span>
      </td>
      <td className={style['td-date']}>{formatDate(date)}</td>
    </tr>
  );
};

Row.propTypes = {
  transaction: PropTypes.object,
};
