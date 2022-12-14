import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { fetchMovieCredits } from 'ApiService';
import { Image } from 'components/Cast.styled';

 export  default function Cast () {
 
  const [moviecasts, setMovieCasts] = useState(null);

  const posterSmallUrlPrefix = 'https://image.tmdb.org/t/p/w200';

  const { movieId } = useParams();

   useEffect(() => {
     async function updateMovieCasts(id) {
       const response = await fetchMovieCredits(id);
       setMovieCasts(response.data);
       console.log(response.data);
     }
     updateMovieCasts(movieId);
   }, [movieId]);

  return (
    <div>       
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
