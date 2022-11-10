import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'ApiService';
import { Image } from 'components/Cast.styled';

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
     <Cast/>
     
      {moviecasts && (
        <ul>
          {moviecasts.cast.map(item => {
            return (
              <li key={item.id}>
                {item.profile_path !== null && (
                  <Image
                    src={posterSmallUrlPrefix + item.profile_path}
                    alt=""
                  />
                )}
                <p> {item.original_name} </p>
                <p>Character: {item.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
