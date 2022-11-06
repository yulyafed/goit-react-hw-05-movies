import { fetchTrendMovies } from 'ApiService';
import { useState, useEffect } from 'react';
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

  return (<MoviesList movies={trendmovies} />
  );
}
