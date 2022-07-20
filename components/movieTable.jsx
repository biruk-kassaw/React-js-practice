import React from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './like';
import Pagination from './pagination';
import Paginate from '../utils/paginate';
import ListGroup from './listGroup';
import { getGenres } from '../services/fakeGenreService';

class Table extends React.Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: getGenres(),
  };

  handleDelete(_id) {
    this.setState({
      movies: this.state.movies.filter((movie) => movie._id != _id),
    });
  }
  handleLike = (movie) => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    let newmovie = { ...movie };
    if (newmovie.liked == false) {
      newmovie.liked = true;
    } else {
      newmovie.liked = false;
    }
    movies[index] = newmovie;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  paginateMovies = () => {
    return Paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize
    );
  };

  handleGenreChange = (genre) => {
    console.log(genre);
  };

  render() {
    const movies = this.paginateMovies();
    return (
      <div className="container">
        {this.paginateMovies().length > 0}
        <h1> showing {this.paginateMovies().length} movies in database</h1>
        <div className="container d-flex flex-row">
          <ListGroup
            genres={this.state.genres}
            handleGenreChange={this.handleGenreChange}
          />
          <div className="ml-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.paginateMovies().map((movie) => {
                  return (
                    <tr key={movie._id}>
                      <th scope="row">{movie.title}</th>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <Like
                          liked={movie.liked}
                          onClick={() => {
                            this.handleLike(movie);
                          }}
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            console.log('clicked');
                            this.handleDelete(movie._id);
                          }}
                          className="btn btn-danger btn-sm"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <Pagination
              itemCount={this.state.movies.length}
              pageSize={this.state.pageSize}
              handlePageChange={this.handlePageChange}
              currentPage={this.state.currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Table;
