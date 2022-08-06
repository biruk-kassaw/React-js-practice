import React from 'react';
import {useParams} from "react-router-dom"

const MovieDetail = () => {
  let params  = useParams()
  return <h1>Movie detail of {params.id}</h1>;
};
export default MovieDetail;
