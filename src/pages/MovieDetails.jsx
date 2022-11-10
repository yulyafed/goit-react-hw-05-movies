import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { BackLink } from 'components/BackLink';
import { Reviews } from 'components/Reviews';
import { Cast } from 'components/Cast';
import { fetchMovieDetails } from 'ApiService';
import {
  Box,
  Image,
  Title,
  TitleBottom,
  TitleNext,
  List,
  Li,
  TitleSecond,
  ListNext,
} from 'pages/MovieDetails.styled';

export function MovieDetails() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const { movieId } = useParams();

  const [moviedetails, setMovieDetails] = useState(null);

  const posterBigUrlPrefix = 'https://image.tmdb.org/t/p/w500';

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
        <Box>
          <Image src={posterBigUrlPrefix + moviedetails.poster_path} alt="" />
          <div>
            <Title>
              {moviedetails.original_title} (
              {new Date(moviedetails.release_date).getFullYear()})
            </Title>
            <p>User Score: {Math.ceil(moviedetails.popularity / 10)}%</p>
            <TitleBottom>Overview</TitleBottom>
            <p>{moviedetails.overview}</p>
            <TitleNext>Genres</TitleNext>
            <List>
              {moviedetails.genres.map(genre => {
                return (
                  <Li key={genre.id}>
                    <p> {genre.name} </p>
                  </Li>
                );
              })}
            </List>
          </div>
        </Box>
      )}
      <TitleSecond>Additional information</TitleSecond>
      <ListNext>
        <li>
          <Link to="cast">Cast</Link>
          <Cast id={movieId} />
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
          <Reviews id={movieId} />
        </li>
      </ListNext>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
