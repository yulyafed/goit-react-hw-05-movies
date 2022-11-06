import { Suspense } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BackLink } from 'components/BackLink';
import { Reviews } from 'components/Reviews';
import { Cast } from 'components/Cast';

export const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/Home';
  const { movieId } = useParams();

  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Cast id={movieId} />
      <Reviews id={movieId} />
    </div>
  );
};
