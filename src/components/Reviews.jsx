import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'ApiService';

export const Reviews = ({ id }) => {

  const [moviereviews, setMovieReviews] = useState(null);

  const link = `/movies/${id}/reviews`;

  useEffect(() => {
    async function updateMovieReviews(id) {
      const response = await fetchMovieReviews(id);
      setMovieReviews(response.data);
      console.log(response.data);
    }
    updateMovieReviews(id);
  }, [id]);

  return (
    <div>
      <Link to={link}>Reviews</Link>
      {moviecasts && (
        <ul>
          {moviecasts.cast.map(item => {
            return (
              <li key={item.id}>
                <img src={item.profile_path} alt="" />
                <p> {item.original_name} </p>
                <p>Character:{item.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};