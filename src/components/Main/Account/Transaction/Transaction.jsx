import style from './Transaction.module.css';
import Button from '../../../../UI/Button';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { transferPostAsync } from '../../../../store/account/accountActions';

export const Transaction = () => {
  const transactionError = useSelector(state => state.account.error);
  const dispatch = useDispatch();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    dispatch(transferPostAsync(data));
    reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style['input-wrapper']}>
        <span className={style.error}>
          {errors.to && errors.to.message}
        </span>
        <label className={style.label}>Счет</label>
        <input
          className={style.input}
          {...register('to', {
            required: 'Заполните это поле',
            pattern: {
              value: /^\d+$/,
              message: 'Некорректный номер счета'
            }
          })}
          type="text"
        />
      </div>
      <div className={style['input-wrapper']}>
        <span className={style.error}>
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

      <Button
        type='submit'
        paddingVertical={22}
        paddingVerticalXS={15}
        paddingHorizontalXS={30}
        width={100}
      >
        Перевести
      </Button>

      {transactionError && <p className={style['submit-error']}>{transactionError}</p>}
    </form>
  );
};
