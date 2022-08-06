import React from 'react';
import { useSearchParams, Navigate, Routes } from 'react-router-dom';
const MovieSearch = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const handleSearchMovie = () => {
    setSearchParams({ movie_genre: 'Comedy' });
  };
  return (
    <>
      <h1>Movie search of {searchParams.get('movie_genre')}</h1>
      <button onClick={handleSearchMovie}> search movie</button>
    </>
  );
};
export default MovieSearch;
