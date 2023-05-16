import Button from '../../../../UI/Button';
import style from './Form.module.css';

export const Form = () => {
  console.log(style);
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Обмен валюты</h3>
      <form className={style.form}>
        <div className={style['inputs-wrapper']}>
          <div className={style['input-wrapper']}>
            <label className={style.label}>Откуда</label>
            <select className={style.input} name="from">
              <option>AUD</option>
              <option>BTC</option>
              <option>BYR</option>
              <option>CAD</option>
            </select>
          </div>

          <div className={style['input-wrapper']}>
            <label className={style.label}>Куда</label>
            <select className={style.input} name="to">
              <option>AUD</option>
              <option>BTC</option>
              <option>BYR</option>
              <option>CAD</option>
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
