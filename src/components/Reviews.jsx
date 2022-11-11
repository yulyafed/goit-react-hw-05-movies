import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'ApiService';

 export default function Reviews() {

   const [moviereviews, setMovieReviews] = useState({
     data:  {results: []} ,
   });

  const { movieId } = useParams();

    useEffect(() => {
      async function updateMovieReviews(id) {
        const response = await fetchMovieReviews(id);
        setMovieReviews(response);
        console.log(response.data);
      }
      updateMovieReviews(movieId);
    }, [movieId]);
console.log(moviereviews);
  return (
    
    <div>
      {moviereviews.data.results.length === 0  && (
        <p> We don't have any reviews for this movie</p>
      )}
      {moviereviews && (
        <ul>
          {moviereviews.data.results.map(item => {
            return (
              <li key={item.id}>
                <b>
                  <p> Author: {item.author} </p>
                </b>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
