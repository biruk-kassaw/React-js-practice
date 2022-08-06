import * as React from 'react';
import './style.css';
import Nav from './components/nav';
import Counter from './components/counter';
import Table from './components/movieTable';
import About from './components/about';
import MovieDetail from './components/movieDetail';

import { Link, Routes, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        {/* <button className="btn btn-secondary m-2">Reset</button> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/tables" element={<Table />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
        {/* <Counter
          counts={this.state.counts}
          handleDelete={this.handleDelete}
          handleIncrement={this.handleIncrement}
        /> */}
      </div>
    );
  }
}
