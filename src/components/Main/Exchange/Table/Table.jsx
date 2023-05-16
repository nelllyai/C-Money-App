import style from './Table.module.css';

export const Table = () => {
  console.log(style);
  return (
    <table>
      <thead>
        <tr>
          <th className={style.title} colSpan="2">Мои валюты</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={style.code}>AUD</td>
          <td className={style.amount}>18.16</td>
        </tr>
        <tr>
          <td className={style.code}>BTC</td>
          <td className={style.amount}>3 081.22</td>
        </tr>
        <tr>
          <td className={style.code}>BYR</td>
          <td className={style.amount}>48.75</td>
        </tr>
        <tr>
          <td className={style.code}>CAD</td>
          <td className={style.amount}>251.48</td>
        </tr>
      </tbody>
    </table>
  );
};
