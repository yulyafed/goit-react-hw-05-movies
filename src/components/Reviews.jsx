import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'ApiService';

export const Reviews = ({ id }) => {

  const [moviereviews, setMovieReviews] = useState(null);

    useEffect(() => {
    async function updateMovieReviews(id) {
      const response = await fetchMovieReviews(id);
      setMovieReviews(response.data);
    }
    updateMovieReviews(id);
  }, [id]);

  return (
    <div>
     
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
