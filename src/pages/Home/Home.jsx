import MoviesList from 'pages/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getTrendMovies } from 'services/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getTrendMovies()
      .then(res => {
        setMovies(res);
        setError(null);
      })
      .catch(err => {
        console.log(err);
        setError(err);
        setMovies([]);
      });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {error && <p>{error.message}</p>}

      {movies?.length > 0 && <MoviesList movies={movies} location={location} />}
    </main>
  );
};

export default Home;
