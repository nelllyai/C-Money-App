import { MoonLoader } from 'react-spinners';
import PropTypes from 'prop-types';

export const Preloader = ({ inTable }) => {
  const cssProperties = {
    position: 'absolute',
    top: 'calc(50% - 50px)',
    left: 'calc(50% - 50px)',
  };

  const tableCssProperties = {
    display: 'block',
    position: 'relative',
    top: '50px',
    left: 'calc(50% - 50px)',
  };

  return (
    <MoonLoader
      color='#9c19ca'
      size={inTable ? 50 : 100}
      cssOverride={inTable ? tableCssProperties : cssProperties}
    />
  );
};

Preloader.propTypes = {
  inTable: PropTypes.bool,
};
