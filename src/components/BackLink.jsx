import PropTypes from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';
import { Backlink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <Backlink to={to}>
      <HiArrowLeft size="10" />
      {children}
    </Backlink>
  );
};
BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
