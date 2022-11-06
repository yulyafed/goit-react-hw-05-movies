import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink';
import { Reviews } from 'components/Reviews';
import { Cast } from 'components/Cast';

export const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/Home';

  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Cast />
      <Reviews />
    </div>
  );
};
