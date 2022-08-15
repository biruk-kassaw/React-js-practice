import React from 'react';
import Input from './input';
class NewMovie extends React.Component {
  state = {
    newMovie: { title: '', genre: '', numberInStock: '', rate: '' },
    errors: {},
  };
  render() {
    const { newMovie, errors } = this.state;
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h1>Movie Form</h1>
        <Input
          value={newMovie.title}
          name="title"
          type="text"
          onChange={this.handleChange}
          label="Enter Title"
          error={errors.email}
        />
        <Input
          value={newMovie.numberInStock}
          name="numberInStock"
          type="text"
          onChange={this.handleChange}
          label="Enter Numbers In Stock"
          error={errors.numberInStock}
        />
        <div className="form-group m-3">
          <label htmlFor={name}>Genre</label>
          <select
            className="custom-select mr-sm-2 form-control"
            id="inlineFormCustomSelect"
          >
            <option value="action" selected>
              Action
            </option>
            <option value="comedy">Comedy</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <Input
          value={newMovie.rate}
          name="rate"
          type="text"
          onChange={this.handleChange}
          label="Enter Rate"
          error={errors.rate}
        />
      </form>
    );
  }
}
export default NewMovie;
