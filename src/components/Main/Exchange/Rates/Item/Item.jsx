import { ArrowIcon } from './ArrowIcon/ArrowIcon';
import style from './Item.module.css';
import PropTypes from 'prop-types';

export const Item = ({ change }) => {
  return (
    <div className={style.tr}>
      <span className={style['td_first']}>
        {change.from}/{change.to}
      </span>
      <span className={style['td_second']}></span>
      <span className={style['td_third']}>
        {change.rate}
        <ArrowIcon up={change.change === 1} />
      </span>
    </div>
  );
};

Item.propTypes = {
  change: PropTypes.object,
};
