import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'ApiService';

 export default function Reviews() {

  const [moviereviews, setMovieReviews] = useState(null);

  const { movieId } = useParams();

    useEffect(() => {
      async function updateMovieReviews(id) {
        const response = await fetchMovieReviews(id);
        setMovieReviews(response.data);
        console.log(response.data);
      }
      updateMovieReviews(movieId);
    }, [movieId]);

  return (
    <div>
      {moviereviews === null && (
        <p> We don't have any reviews for this movie</p>
      )}
      {moviereviews && (
        <ul>
          {moviereviews.results.map(item => {
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
