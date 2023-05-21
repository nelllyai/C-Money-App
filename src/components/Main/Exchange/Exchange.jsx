import style from './Exchange.module.css';
import Rates from './Rates';
import Form from './Form';
import Table from './Table';

export const Exchange = () => {
  console.log(style);
  return (
    <div className={style.container}>
      <h2 className={style.title}>Обмен валюты</h2>
      <span className={style.text}>Счет</span>
      <span className={style['text_white']}>24051911200915061003240821</span>

      <br />

      <span className={style.text}>Баланс</span>
      <span className={`${style['text_white']} ${style.balance}`}>6 795 296.36</span>

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
