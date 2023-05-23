import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../UI/Button';
import style from './Form.module.css';
import { useEffect } from 'react';
import { currenciesRequestAsync } from '../../../../store/currencies/currenciesActions';
import { allCurrenciesRequestAsync } from '../../../../store/allCurrencies/allCurrenciesActions';
import { v4 as uuid } from 'uuid';

export const Form = () => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const userCurrencies = useSelector(state => state.currencies.currencies);
  const allCurrencies = useSelector(state => state.allCurrencies.list);

  useEffect(() => {
    if (token) {
      dispatch(currenciesRequestAsync());
      dispatch(allCurrenciesRequestAsync());
    }
  }, [token]);

  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Обмен валюты</h3>
      <form className={style.form}>
        <div className={style['inputs-wrapper']}>
          <div className={style['input-wrapper']}>
            <label className={style.label}>Откуда</label>
            <select className={style.input} name="from">
              {[...allCurrencies]
                .sort()
                .map(currency => <option key={uuid()}>{currency}</option>)}
            </select>
          </div>

          <div className={style['input-wrapper']}>
            <label className={style.label}>Куда</label>
            <select className={style.input} name="to">
              {[...userCurrencies]
                .filter(currency => currency.amount)
                .sort()
                .map(currency => <option key={uuid()}>{currency.code}</option>)}
            </select>
          </div>

          <div className={style['input-wrapper']}>
            <span className={style['form-error']}></span>
            <label className={style.label}>Сумма</label>
            <input className={style.input} name="amount" />
          </div>
        </div>

        <Button
          paddingVertical={6}
          paddingHorizontal={30}
          maxWidth={150}
          flexEnd
        >
          Обменять
        </Button>
      </form>
    </div>

  );
};
