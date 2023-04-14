import style from './Transaction.module.css';
import Button from '../../../Button';

export const Transaction = () => {
  return (
    <div className={style.transaction}>
      <h3 className={style.title}>Перевод</h3>
      <form className={style.form}>
        <div className={style['input-wrapper']}>
          <label className={style.label}>Счет</label>
          <input className={style.input} name="to" />
        </div>
        <div className={style['input-wrapper']}>
          <label className={style.label}>Сумма</label>
          <input className={style.input} name="amount" />
        </div>

        <Button
        type='button'
        paddingVertical={22}
        paddingHorizontal={143}
        >
          Перевести
        </Button>
      </form>
    </div>
  );
};
