import style from './Card.module.css';
import PropTypes from 'prop-types';
import { Date } from './Date/Date';
import { Link } from 'react-router-dom';
import { round } from '../../../../utils/round';

export const Card = ({ accountInfo }) => {
  return (
    <li className={style.card}>
      <Link to={`/accounts/${accountInfo.account}`}>
        <p className={style.id}>{accountInfo.account}</p>
        <p className={style.balance}>{round(accountInfo.balance)}</p>
        <div className={style.info}>
          {
            accountInfo.date &&
            <div>
              <p>открыт</p>
              <Date date={accountInfo.date} />
            </div>
          }

          {accountInfo.transactions[0] &&
            <div>
              <p>последняя операция</p>
              <Date date={accountInfo.transactions[0].date} />
            </div>
          }
        </div>
      </Link>
    </li>
  );
};

Card.propTypes = {
  accountInfo: PropTypes.object,
};
