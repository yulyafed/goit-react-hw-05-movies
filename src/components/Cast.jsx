import { Link } from 'react-router-dom';

export const Cast = ({ id }) => {
  const link = `/movies/${id}/cast`;
  return <Link to={link}>Cast</Link>;
};
