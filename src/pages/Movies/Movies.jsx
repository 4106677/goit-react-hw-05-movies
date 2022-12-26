import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'pages/MoviesList/MoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovQuery } from 'services/Api';

const Movies = () => {
  const [searchMov, setSearchMov] = useState([]);
  const [err, setErr] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      setSearchMov([]);
      return;
    }

    getMovQuery(searchQuery.trim())
      .then(result => {
        setSearchMov(result);
        setErr(null);
      })
      .catch(error => {
        setSearchMov([]);
        setErr(error);
        alert(error.message);
      });
  }, [searchQuery]);

  const onSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />

      {searchMov?.length > 0 && (
        <MoviesList movies={searchMov} location={location} />
      )}
    </>
  );
};

export default Movies;
