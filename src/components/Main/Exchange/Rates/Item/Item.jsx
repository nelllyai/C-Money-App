import { ArrowIcon } from './ArrowIcon/ArrowIcon';
import style from './Item.module.css';

export const Item = () => {
  console.log(style);
  return (
    <div className={style.tr}>
      <span className={style['td_first']}>CAD/UAH</span>
      <span className={style['td_second']}></span>
      <span className={style['td_third']}>42.98
        <ArrowIcon up />
      </span>
    </div>
  );
};
