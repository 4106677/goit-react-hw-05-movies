import { Link } from 'react-router-dom';

import { IMAGE_URL } from 'services/Api';

const MoviesList = ({ movies, location }) => {
  // console.log(movies);
  return (
    <ul>
      <h2>header</h2>
      {movies.map(({ id, title, poster_path, release_date }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <p>
              {title},
              {release_date ? new Date(release_date).getFullYear() : '---'}
            </p>
            {/* <img
              src={IMAGE_URL + poster_path}
              alt={title}
              loading="lazy"
              width={250}
            /> */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
