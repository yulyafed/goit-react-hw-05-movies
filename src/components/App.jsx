import { Routes, Route} from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { NotFound } from 'components/NotFound';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';
import { Layout } from 'components/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} >
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />            
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    
  );
};
