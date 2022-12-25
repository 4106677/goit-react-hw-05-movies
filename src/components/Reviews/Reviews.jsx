// import Container from 'components/Container';
// import RequestError from 'components/RequestError';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastId, getReviewsId, IMAGE_URL } from 'services/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReviewsId(movieId)
      .then(reviews => {
        setReviews(reviews);

        setError(null);
      })
      .catch(error => {
        setError(error);
        setReviews([]);
      });
  }, [movieId]);

  return (
    <>
      {reviews?.length > 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <b>Author: {author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews.length === 0 && !error && <p>Not reviews</p>}
    </>
  );
};

export default Reviews;
