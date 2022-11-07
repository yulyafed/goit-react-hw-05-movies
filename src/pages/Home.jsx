import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'ApiService';
import PropTypes from 'prop-types';
import { MoviesList } from 'components/MoviesList';

export function Home() {

  const [trendmovies, setTrendMovies] = useState(null);

  useEffect(() => {
    
    async function updateTrendMovies() {
      const response = await fetchTrendMovies();
      setTrendMovies(response.data.results);
    }

    updateTrendMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={trendmovies} />
    </>
  );
}

ImageGalleryBox.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
