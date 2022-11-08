import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <div>
      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
