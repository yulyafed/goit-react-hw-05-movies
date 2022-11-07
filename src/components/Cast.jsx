import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'ApiService';

export const Cast = ({ id }) => {
 
  const [moviecasts, setMovieCasts] = useState(null);

  const posterSmallUrlPrefix = 'https://image.tmdb.org/t/p/w200';

   useEffect(() => {
    async function updateMovieCasts(id) {
      const response = await fetchMovieCredits(id);
      setMovieCasts(response.data);
      console.log(response.data);
      
    }
    updateMovieCasts(id);
  }, [id]);

  return (
    <div>
        {moviecasts && (
        <ul>
          {moviecasts.cast.map(item => {
            return (
              <li key={item.id}>
                {item.profile_path !== null && (
                  <img src={posterSmallUrlPrefix + item.profile_path} alt="" />
                )}
                <p> {item.original_name} </p>
                <p>Character:{item.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}