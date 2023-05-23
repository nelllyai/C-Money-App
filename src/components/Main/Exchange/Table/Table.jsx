import { useDispatch, useSelector } from 'react-redux';
import { Row } from './Row/Row';
import style from './Table.module.css';
import { currenciesRequestAsync } from '../../../../store/currencies/currenciesActions';
import { useEffect } from 'react';

export const Table = () => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const currencies = useSelector(state => state.currencies.currencies);

  useEffect(() => {
    if (token) dispatch(currenciesRequestAsync());
  }, [token]);

  return (
    <table>
      <thead>
        <tr>
          <th className={style.title} colSpan="2">Мои валюты</th>
        </tr>
      </thead>
      <tbody>
        {
          currencies.map(currency => <Row currency={currency} />)
        }
      </tbody>
    </table>
  );
};
