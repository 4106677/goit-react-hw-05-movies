import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovId, IMAGE_URL } from 'services/Api';
import {
  Container,
  Image,
  MainInfo,
  Links,
  BtnList,
} from './MovieDetail.styled';

const MovieDetail = () => {
  const { movieId } = useParams(null);
  const location = useLocation(null);

  const [movie, setMovie] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getMovId(movieId)
      .then(data => {
        setMovie(data);
        setError(null);
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
        setMovie(null);
      });
  }, [movieId]);

  if (!movie || !movieId) {
    return null;
  }

  const backLinkHref = location.state?.from ?? '/';
  // const back = String.fromCharCode(&#8592);

  return (
    <Container>
      <MainInfo>
        {error && <h1>{error}</h1>}
        <Image
          src={IMAGE_URL + movie.posterPath}
          alt="movie.title"
          height="350"
        ></Image>

        <ul>
          <Links to={backLinkHref}>&larr; Go back</Links>
          <li>
            <h3>
              {' '}
              {movie.title}{' '}
              {movie.releaseDate
                ? `(${new Date(movie.releaseDate).getFullYear()})`
                : '(----)'}
            </h3>
            <p>User score: {movie.voteAverage.toFixed(1) * 10}%</p>
          </li>
          <li>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          </li>
        </ul>
      </MainInfo>

      <h3>Additional information</h3>
      <BtnList>
        <li>
          <Links to="cast">Cast</Links>
        </li>
        <li>
          <Links to={'reviews'}>Reviews</Links>
        </li>
      </BtnList>
      <Outlet />
    </Container>
  );
};

export default MovieDetail;
