import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { IMAGE_URL } from 'services/Api';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      <h2>header</h2>
      {movies.map(({ id, title, poster_path, release_date }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <p>
              {title}, {}
              {release_date ? new Date(release_date).getFullYear() : '---'}
            </p>
            <img
              src={IMAGE_URL + poster_path}
              alt={title}
              loading="lazy"
              width={250}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};

export default MoviesList;
