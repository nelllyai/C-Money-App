import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../UI/Button';
import style from './Form.module.css';
import { useEffect } from 'react';
import { currenciesBuyAsync, currenciesRequestAsync } from '../../../../store/currencies/currenciesActions';
import { allCurrenciesRequestAsync } from '../../../../store/allCurrencies/allCurrenciesActions';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';

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

  const buyError = useSelector(state => state.currencies.error);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const from = watch('from');
  const to = watch('to');

  useEffect(() => {
    let defaultValues = {};
    defaultValues.from =
      [...userCurrencies]
        .filter(currency => currency.amount)[0]?.code || '';
    defaultValues.to =
      [...allCurrencies]
        .sort()[0] || '';
    reset({ ...defaultValues });
  }, [userCurrencies, allCurrencies]);

  const onSubmit = data => {
    dispatch(currenciesBuyAsync(data));
    reset();
  };

  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Обмен валюты</h3>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style['inputs-wrapper']}>
          <div className={style['input-wrapper']}>
            <label className={style.label}>Откуда</label>
            <select
              className={style.input}
              {...register('from')}
              value={from}
            >
              {[...allCurrencies]
                .sort()
                .map(currency =>
                  <option value={currency} key={uuid()}>{currency}</option>
                )}
            </select>
          </div>

          <div className={style['input-wrapper']}>
            <label className={style.label}>Куда</label>
            <select
              className={style.input}
              {...register('to')}
              value={to}
            >
              {[...userCurrencies]
                .filter(currency => currency.amount)
                .map(currency =>
                  <option value={currency.code} key={uuid()}>{currency.code}</option>
                )}
            </select>
          </div>

          <div className={style['input-wrapper']}>
            <span className={style['form-error']}>
              {errors.amount && errors.amount.message}
            </span>
            <label className={style.label}>Сумма</label>
            <input
              className={style.input}
              {...register('amount', {
                required: 'Заполните это поле',
                pattern: {
                  value: /^([0-9]*[.])?[0-9]+$/,
                  message: 'Некорректная сумма'
                }
              })}
              type="text"
            />
          </div>
        </div>

        <Button
          paddingVertical={6}
          paddingHorizontal={30}
          maxWidth={150}
          flexEnd
          disabled={to === from}
        >
          Обменять
        </Button>

        {buyError && <p className={style['submit-error']}>{buyError}</p>}
      </form>
    </div>

  );
};
