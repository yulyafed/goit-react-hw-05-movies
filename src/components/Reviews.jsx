import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'ApiService';
import { NotFound } from './NotFound';

export const Reviews = ({ id }) => {

  const [moviereviews, setMovieReviews] = useState(null);

  const link = `/movies/${id}/reviews`;

  useEffect(() => {
    async function updateMovieReviews(id) {
      const response = await fetchMovieReviews(id);
      setMovieReviews(response.data);
    }
    updateMovieReviews(id);
  }, [id]);

  return (
    <div>
      <Link to={link}>Reviews</Link>
      {moviereviews.total_results === 0 && <NotFound />}
      {moviereviews && (
        <ul>
          {moviereviews.results.map(item => {
            return (
              <li key={item.id}>
                <p> Author:{item.author} </p>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};