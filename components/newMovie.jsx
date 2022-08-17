import React from 'react';
import Input from './input';
import { saveMovie, getMovie } from '../services/fakeMovieService';
import { Navigate } from 'react-router-dom';

class NewMovie extends React.Component {
  state = {
    newMovie: { title: '', genre: '', numberInStock: '', dailyRentalRate: '' },
    errors: {},
  };
  componentDidMount() {
    if (this.props.params) {
      const id = this.props.params.id;
      const movie = getMovie(id);
      this.setState({ newMovie: movie });
    }
  }
  validateInput = (e) => {
    if (e.target.name == 'numberInStock') {
      if (parseInt(e.target.value) < 0) {
        return 'number in stock can not be less than 0';
      }
      if (parseInt(e.target.value) > 100) {
        return 'number in stock can not be greater than 100';
      }
    }

    if (e.target.name == 'title') {
      if (!e.target.value) {
        return 'title can not be empty';
      }
    }
  };

  handleChange = (e) => {
    let errors = { ...this.state.errors };

    let newMovie = { ...this.state.newMovie };
    newMovie[e.target.name] = e.target.value;
    let error = this.validateInput(e);
    errors[e.target.name] = error;

    this.setState({ newMovie, errors });
  };

  validate = () => {
    let errors = {};
    const { numberInStock, dailyRentalRate, title } = this.state.newMovie;

    if (parseInt(numberInStock) < 0) {
      errors.numberInStock = 'number in stock can not be less than 0';
    }
    if (parseInt(numberInStock) > 100) {
      errors.numberInStock = 'number in stock can not be greater than 100';
    }
    if (parseInt(dailyRentalRate) > 10) {
      errors.numberInStock = 'rating can not be greater than 10';
    }
    if (title.length === 0) {
      errors.title = 'title can not be empty';
    }
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors });

    if (Object.keys(errors).length == 0) {
      let newMovie = this.state.newMovie;
      newMovie.genreId = '5b21ca3eeb7f6fbccd471818';
      saveMovie(newMovie);
      console.log(newMovie);
      console.log('submitted');
    }
  };
  afterS() {
    return <Navigate to="/tables" />;
  }
  render() {
    const { newMovie, errors } = this.state;
    return (
      <form
        className="container"
        onSubmit={this.handleSubmit}
        afterSubmit={this.afterS()}
      >
        <h1>Movie Form</h1>
        <Input
          value={newMovie.title}
          name="title"
          type="text"
          onChange={this.handleChange}
          label="Enter Title"
          error={errors.title}
        />
        <Input
          value={newMovie.numberInStock}
          name="numberInStock"
          type="number"
          onChange={this.handleChange}
          label="Enter Numbers In Stock"
          error={errors.numberInStock}
        />
        <div className="form-group m-3">
          <label htmlFor={name}>Genre</label>
          <select
            className="custom-select mr-sm-2 form-control"
            id="inlineFormCustomSelect"
            value={newMovie.genre}
            onChange={this.handleChange}
            name="genre"
          >
            <option value="action" selected>
              Action
            </option>
            <option value="comedy">Comedy</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>
        <Input
          value={newMovie.dailyRentalRate}
          name="dailyRentalRate"
          type="number"
          onChange={this.handleChange}
          label="Enter dailyRentalRate"
          error={errors.dailyRentalRate}
        />
        <button
          disabled={Object.keys(this.validate()).length !== 0}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}
export default NewMovie;
