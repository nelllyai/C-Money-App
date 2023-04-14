import style from './Transaction.module.css';
import Button from '../../../../UI/Button';

export const Transaction = () => {
  return (
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
        paddingVerticalXS={15}
        paddingHorizontalXS={30}
        width={100}
      >
        Перевести
      </Button>
    </form>
  );
};
