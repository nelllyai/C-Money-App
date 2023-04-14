import classNames from 'classnames';
import style from './Button.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Button = prop => {
  const {
    link,
    className,
    type,
    children,
    flex,
    paddingVertical,
    paddingHorizontal,
    marginBottom,
    marginBottomXS,
    gap,
    onClick,
  } = prop;

  const classes = classNames(
    className,
    style.button,
    {[style[`padding-vertical-${paddingVertical}`]]: paddingVertical},
    {[style[`padding-horizontal-${paddingHorizontal}`]]: paddingHorizontal},
    {[style[`margin-bottom-${marginBottom}`]]: marginBottom},
    {[style[`xs-margin-bottom-${marginBottomXS}`]]: marginBottomXS},
    {[style.flex]: flex},
    {[style[`gap-${gap}`]]: gap},
  );

  return (
    link ?
    <Link to={link} className={classes}>{children}</Link> :
    <button className={classes} type={type} onClick={onClick}>{children}</button>
  );
};

Button.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  flex: PropTypes.bool,
  gap: PropTypes.number,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  marginBottom: PropTypes.number,
  marginBottomXS: PropTypes.number,
  onClick: PropTypes.func,
};
