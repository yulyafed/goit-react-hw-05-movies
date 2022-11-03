import { Link } from 'react-router-dom';
import { MovieDetails } from 'pages/MovieDetails';

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <MovieDetails />
    </div>
  );
};
