import { Link } from 'react-router-dom';

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
