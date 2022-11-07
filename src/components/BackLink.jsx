import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <HiArrowLeft size="10" />
      {children}
    </Link>
  );
};
MoviesList.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
