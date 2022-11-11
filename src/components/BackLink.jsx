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

