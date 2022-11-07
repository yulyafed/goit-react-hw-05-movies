import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'components/Layout';
import { NotFound } from 'components/NotFound';

const createAsyncComponent = (path) => lazy(() => import(path));

const Home = createAsyncComponent('pages/Home');
const Movies = createAsyncComponent('pages/Movies');
const MovieDetails = createAsyncComponent('pages/MovieDetails');
const Cast = createAsyncComponent('components/Cast');
const Reviews = createAsyncComponent('components//Reviews');

export const App = () => {
  return (
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
  );
};
