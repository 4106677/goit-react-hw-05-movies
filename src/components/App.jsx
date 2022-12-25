import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import MovieDetail from '../pages/MovieDetail/MovieDetail';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

/*
Layout
-AppBar (header=> navigation)
--Home
--Movies
---Searchbar


*/
export default App;
