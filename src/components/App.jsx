import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
import { Layout } from 'components/Layout';
import { NotFound } from 'components/NotFound';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'components/Cast';
import { Reviews } from 'components//Reviews';

// const createAsyncComponent = (path) => lazy(() => import(path));

// const Home = createAsyncComponent('../pages/Home');
// const Movies = createAsyncComponent('../pages/Movies');
// const MovieDetails = createAsyncComponent('../pages/MovieDetails');
// const Cast = createAsyncComponent('./Cast');
// const Reviews = createAsyncComponent('./Reviews');

export const App = () => {
  return (

    // <Suspense fallback={<div>Loading</div>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    // </Suspense>
  );
};
