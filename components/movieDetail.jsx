import React from 'react';
import { useParams } from 'react-router-dom';
import NewMovie from './newMovie';

const MovieDetail = () => {
  let params = useParams();

  return <NewMovie params={params} />;
};
export default MovieDetail;
