import { useLocation, useParams, Link } from 'react-router-dom';
import { useState, useEffect, Suspense, Outlet } from 'react';
import PropTypes from 'prop-types';
import { BackLink } from 'components/BackLink';
import { Reviews } from 'components/Reviews';
import { Cast } from 'components/Cast';
import { fetchMovieDetails } from 'ApiService';

export function MovieDetails() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/Home';

  const { movieId } = useParams();

  const [moviedetails, setMovieDetails] = useState(null);

  const posterBigUrlPrefix = 'https://image.tmdb.org/t/p/w500';

  const linkCast = `movies/${movieId}/cast`;
  const linkReview = `movies/${movieId}/reviews`;

  useEffect(() => {
    async function updateMovieDetails(id) {
      const response = await fetchMovieDetails(id);
      setMovieDetails(response.data);
    }

    updateMovieDetails(movieId);
  }, [movieId]);

  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {moviedetails && (
        <div>
          <img src={posterBigUrlPrefix + moviedetails.poster_path} alt="" />
          <h1>
            {moviedetails.original_title}({moviedetails.release_date})
          </h1>
          <p>User Score:{Math.ceil(moviedetails.popularity / 10)}%</p>
          <h2>Overview</h2>
          <p>{moviedetails.overview}</p>
          <h3>Genres</h3>
          <ul>
            {moviedetails.genres.map(genre => {
              return (
                <li key={genre.id}>
                  <p> {genre.name} </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <h2>Additional information</h2>
      <Link to='cast'>Cast</Link>
      <Link to='reviews'>Reviews</Link>
      <Cast id={movieId} />
      <Reviews id={movieId} />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

MovieDetails.propTypes = {
    id: PropTypes.string.isRequired,
};
