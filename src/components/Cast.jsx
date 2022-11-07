import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'ApiService';

export const Cast = ({ id }) => {
 
  const [moviecasts, setMovieCasts] = useState(null);

  const link = `/movies/${id}/cast`;

  useEffect(() => {
    async function updateMovieCasts(id) {
      const response = await fetchMovieCredits(id);
      setMovieCasts(response.data);
      
    }
    updateMovieCasts(id);
  }, [id]);

  return (
    <div>
      <Link to={link}>Cast</Link>
      {moviecasts && (
        <ul>
          {moviecasts.cast.map(item => {
            return (
              <li key={item.id}>
                <img src={ item.profile_path} alt="" />
                <p> {item.original_name} </p>
                <p>Character:{ item.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}