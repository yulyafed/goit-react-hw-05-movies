import {  useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackLink } from 'components/BackLink';
import { Reviews } from 'components/Reviews';
import { Cast } from 'components/Cast';
import { fetchMovieDetails } from 'ApiService';

export const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/Home';

  const { movieId } = useParams();

  const [moviedetails, setMovieDetails] = useState(null);

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
      <h2>Additional information</h2>
      <Cast id={movieId} />
      <Reviews id={movieId} />
      {moviedetails && (
        <div>
          <img src={moviedetails.poster_path} alt="" />
          <h1>{moviedetails.original_title}({moviedetails.release_date})</h1>
          <p>User Score:{Math.ceil(moviedetails.popularity/10)}%</p>
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
    </div>
  );
};
