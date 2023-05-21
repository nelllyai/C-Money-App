import { Item } from './Item/Item';
import style from './Rates.module.css';

export const Rates = () => {
  console.log(style);
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Изменение курса в режиме реального времени</h3>
      <div>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};
