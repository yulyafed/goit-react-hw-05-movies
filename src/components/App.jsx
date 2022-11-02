import { Routes, Route, Link } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { NotFound } from 'pages/NotFound';
import { Details } from 'pages/Details';
import { Credits } from 'pages/Credits';
import { Reviews } from 'pages/Reviews';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:detailsId" element={<Details />} />
        <Route path="/movies/:creditsId" element={<Credits />} />
        <Route path="/movies/:reviewsId" element={<Reviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
