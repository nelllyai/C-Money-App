import style from './Exchange.module.css';
import Rates from './Rates';
import Form from './Form';
import Table from './Table';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currenciesRequestAsync } from '../../../store/currencies/currenciesActions';

export const Exchange = () => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const userCurrencies = useSelector(state => state.currencies.currencies);

  useEffect(() => {
    if (token) {
      dispatch(currenciesRequestAsync());
    }
  }, [token]);

  return (
    <div className={style.container}>
      <h2 className={style.title}>Обмен валюты</h2>
      <span className={style.text}>Счет</span>
      <span className={style['text_white']}>24051911200915061003240821</span>

      <br />

      <span className={style.text}>Баланс</span>
      <span className={`${style['text_white']} ${style.balance}`}>
        {userCurrencies.find(currency => currency.code === 'RUB')?.amount || 0}
      </span>

      <div className={style.wrapper}>

        <Rates />

        <div className={style['right-wrapper']}>
          <Form />
          <Table />
        </div>
      </div>
    </div>
  );
};
