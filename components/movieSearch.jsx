import React from 'react';
import {
  useSearchParams,
  Navigate,
  Routes,
  useNavigate,
} from 'react-router-dom';
const MovieSearch = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();
  const handleSearchMovie = () => {
    setSearchParams({ movie_genre: 'Comedy' });
    navigate('/');
  };
  return (
    <>
      <h1>Movie search of {searchParams.get('movie_genre')}</h1>
      <button onClick={handleSearchMovie}> search movie</button>
    </>
  );
};
export default MovieSearch;
