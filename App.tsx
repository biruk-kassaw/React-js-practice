import * as React from 'react';
import './style.css';
import Nav from './components/nav';
import Counter from './components/counter';
import Table from './components/movieTable';
import About from './components/about';
import MovieDetail from './components/movieDetail';
import MovieSearch from './components/movieSearch';
import NotFound from './components/notFound';
import LogIn from './components/logIn';
import Register from './components/register';
import NewMovie from './components/newMovie';
import { Link, Routes, Route, Navigate } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        {/* <button className="btn btn-secondary m-2">Reset</button> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/tables" element={<Table />}>
            <Route path="new" element={<MovieDetail />} />
          </Route>
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/movies" element={<MovieSearch />} />
          <Route path="/" element={<Table />} />
          <Route path="/hello" element={<Navigate to="/" />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies/new" element={<NewMovie />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}
