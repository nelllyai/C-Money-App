import PropTypes from 'prop-types';
import formatDate from '../../../../../utils/formatDate';

export const Date = ({date}) => {
  return (
    <time dateTime={date}>
      {formatDate(date)}
    </time>
  );
};

Date.propTypes = {
  date: PropTypes.string,
};
