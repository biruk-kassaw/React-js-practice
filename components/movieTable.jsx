import React from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './like';
class Table extends React.Component {
  state = {
    movies: getMovies(),
  };

  handleDelete(_id) {
    this.setState({
      movies: this.state.movies.filter((movie) => movie._id != _id),
    });
  }

  render() {
    return (
      <div>
        {this.state.movies.length > 0}
        <h1> showing {this.state.movies.length} movies in database</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">like</th>
              <th scope="col">delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <th scope="row">{movie.title}</th>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <a href="">hello</a>
                    <like />{' '}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(movie._id);
                      }}
                      className="btn btn-warning"
                    >
                      delete{' '}
                    </button>{' '}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;
