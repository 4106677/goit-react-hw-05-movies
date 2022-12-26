import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Item, Poster } from './MovieList.styled';

import { IMAGE_URL } from 'services/Api';

const MoviesList = ({ movies, location }) => {
  return (
    <Container>
      {movies.map(({ id, title, poster_path, release_date }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Poster src={IMAGE_URL + poster_path} alt={title} loading="lazy" />
            <p>
              {title}, {}
              {release_date ? new Date(release_date).getFullYear() : '---'}
            </p>
          </Link>
        </Item>
      ))}
    </Container>
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
