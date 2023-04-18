import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { resultReviews } from './api/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await resultReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 && (
        <h3>We don't have any reviews for this movie.</h3>
      )}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            {review.author}
            <span style={{ display: 'block' }}>{review.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
