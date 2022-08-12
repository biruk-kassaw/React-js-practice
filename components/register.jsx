import React from 'react';

import Input from './input';

class Register extends React.Component {
  state = {
    user: { userName: '', email: '', password: '' },
    errors: {},
  };

  handleChange = ({ target }) => {
    const user = { ...this.state.user };
    user[target.name] = target.value;
    this.setState({ user });
  };

  validate = () => {
    const errors = {};
    const { userName, email, password } = this.state.user;
    if (userName.length < 3) {
      errors.userName = 'length must be greater than 3';
    }
    if (userName.length > 5) {
      errors.userName = 'length must be less than 6';
    }
    if (password.length < 6) {
      errors.password = 'length must be greater than 6';
    }

    return errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
  };
  render() {
    const { user, errors } = this.state;
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h2>Register</h2>
        <Input
          value={user.email}
          name="email"
          type="text"
          onChange={this.handleChange}
          label="Enter Email"
          error={errors.email}
        />
        <Input
          value={user.password}
          name="password"
          type="password"
          onChange={this.handleChange}
          label="Enter password"
          error={errors.password}
        />
        <Input
          value={user.userName}
          name="userName"
          type="text"
          onChange={this.handleChange}
          label="Enter Username"
          error={errors.userName}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Register;
