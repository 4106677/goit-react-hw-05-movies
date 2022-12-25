import MoviesList from 'pages/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getTrendMovies } from 'services/Api';

const Home = () => {
  const location = useLocation();
  //   const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendMovies()
      .then(res => {
        setMovies(res);
        // setLoading(false);
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

      {movies?.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;
