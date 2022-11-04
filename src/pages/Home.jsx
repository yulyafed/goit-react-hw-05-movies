import { fetchTrendMovies } from 'ApiService';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      {trendmovies && (
        <ul>
          {trendmovies.map(movie => {
            return (
              <li>
                <Link to={`movies/${movie.id}`}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
