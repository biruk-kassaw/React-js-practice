import React from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './like';
import Pagination from './pagination';
import Paginate from '../utils/paginate';
import ListGroup from './listGroup';
import { getGenres } from '../services/fakeGenreService';

class Table extends React.Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    currentGenre: 'All',
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

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
  paginateMovies = (movies) => {
    return Paginate(movies, this.state.currentPage, this.state.pageSize);
  };
  changeGenre = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };
  handleGenreChange = (genre) => {
    if (genre === 'All') {
      return this.state.movies;
    }
    const movies = this.state.movies.filter((movie) => {
      const movieGenre = movie.genre.name;
      const currentGenre = genre;
      return movieGenre === currentGenre;
    });
    return movies;
  };

  render() {
    let movies = this.handleGenreChange(this.state.currentGenre);
    let paginatedMovies = this.paginateMovies(movies);

    return (
      <div className="container">
        {movies.length > 0}
        <h1> showing {movies.length} movies in database</h1>
        <div className="container row">
          <div className="col-2">
            <ListGroup
              genres={this.state.genres}
              changeGenre={this.changeGenre}
            />
          </div>

          <div className="col-4">
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
                {paginatedMovies.map((movie) => {
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
              itemCount={movies.length}
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
