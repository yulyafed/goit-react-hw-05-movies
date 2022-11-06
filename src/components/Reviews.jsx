import { Link } from 'react-router-dom';

export const Reviews = ({ id }) => {
  const link = `/movies/${id}/reviews`;
  return <Link to={link}>Reviews</Link>;
};
