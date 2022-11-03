import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import { Movies } from 'pages/Movies';
import { Home } from 'pages/Home';
import { Layout } from 'components/Layout';
import { NotFound } from 'components/NotFound';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';

// const createAsyncComponent = path => lazy(() => import(path));

// const Home = createAsyncComponent('pages/Home');
// const MovieDetails = createAsyncComponent('pages/MovieDetails');
// const Cast = createAsyncComponent('components/Cast');
// const Reviews = createAsyncComponent('components/Reviews');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
