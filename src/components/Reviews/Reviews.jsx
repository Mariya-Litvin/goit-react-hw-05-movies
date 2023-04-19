import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { resultReviews } from '../api/Api';
import { ElementReviews, ListReview, ReviewContent } from './Reviews.styled';

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
      <ListReview>
        {reviews.map(review => (
          <ElementReviews key={review.id}>
            <div>
              <ReviewContent>{review.author}</ReviewContent>
              <span style={{ display: 'block' }}>{review.content}</span>
            </div>
          </ElementReviews>
        ))}
      </ListReview>
    </div>
  );
};

export default Reviews;
