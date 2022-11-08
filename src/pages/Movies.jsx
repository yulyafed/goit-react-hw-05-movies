import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MoviesList } from 'components/MoviesList';
import { SearchBox } from 'components/SearchBox';
import { fetchSearchMovies } from 'ApiService';

export function Movies() {

  const [searchmovies, setSearchMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieQuery = searchParams.get('movieQuery');

  useEffect(() => {
    
    async function UpdateSearchMovies(movieQuery) {
      const response = await fetchSearchMovies(movieQuery);
      setSearchMovies(response.data.results);
    }

    if (movieQuery !== null && movieQuery !== '') {
      UpdateSearchMovies(movieQuery);
    }
  }, [movieQuery]);

  const onSearchSubmit = query => {
    setSearchParams({ movieQuery: query });
  };

  return (
    <div>
      <SearchBox onSearchQueryChanged={onSearchSubmit} value={movieQuery} />
      <MoviesList movies={searchmovies} />
    </div>
  );
}
