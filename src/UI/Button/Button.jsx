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
    flexEnd,
    paddingVertical,
    paddingVerticalXS,
    paddingHorizontal,
    paddingHorizontalXS,
    marginBottom,
    marginBottomXS,
    width,
    maxWidth,
    gap,
    onClick,
  } = prop;

  const classes = classNames(
    className,
    style.button,
    {[style[`padding-vertical-${paddingVertical}`]]: paddingVertical},
    {[style[`xs-padding-vertical-${paddingVerticalXS}`]]: paddingVerticalXS},
    {[style[`padding-horizontal-${paddingHorizontal}`]]: paddingHorizontal},
    {[style[`xs-padding-horizontal-${paddingHorizontalXS}`]]: paddingHorizontalXS},
    {[style[`margin-bottom-${marginBottom}`]]: marginBottom},
    {[style[`xs-margin-bottom-${marginBottomXS}`]]: marginBottomXS},
    {[style[`width-${width}`]]: width},
    {[style[`max-width-${maxWidth}`]]: maxWidth},
    {[style.flex]: flex},
    {[style['flex-end']]: flexEnd},
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
  flexEnd: PropTypes.bool,
  gap: PropTypes.number,
  paddingVertical: PropTypes.number,
  paddingVerticalXS: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  paddingHorizontalXS: PropTypes.number,
  marginBottom: PropTypes.number,
  marginBottomXS: PropTypes.number,
  width: PropTypes.number,
  maxWidth: PropTypes.number,
  onClick: PropTypes.func,
};
