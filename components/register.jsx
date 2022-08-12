import React from 'react';

import Input from './input';

class Register extends React.Component {
  state = {
    user: { userName: '', email: '', password: '' },
    errors: {},
  };

  handleChange = () => {};
  handleSubmit = () => {};
  render() {
    const { user, errors } = this.state;
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h2>Register</h2>
        <Input
          value={user.email}
          name="email"
          type="email"
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
