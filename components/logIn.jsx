import React from 'react';
import Input from './input';

class LogIn extends React.Component {
  state = {
    account: {
      userName: '',
      password: '',
    },
    errors: {},
  };

  validate = () => {
    const errors = {};

    if (this.state.account.userName === '') {
      errors['userName'] = 'username maust';
    }

    if (this.state.account.password === '') {
      errors['password'] = 'password maust';
    }

    return errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (errors) {
      this.setState({ errors });
      return;
    }
    console.log('submited');
  };
  validateInput = (input) => {
    if (input.name === 'userName') {
      if (input.value === '') return 'Username is required';
    }
    if (input.name === 'password') {
      if (input.value === '') return 'password is required';
    }
  };

  handleChange = ({ target }) => {
    let account = { ...this.state.account };
    let errors = { ...this.state.errors };
    account[target.name] = target.value;

    const error = this.validateInput(target);
    if (error) {
      errors[target.name] = error;
    } else {
      errors[target.name] = '';
    }
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h2>Login</h2>
        <Input
          label="Username"
          name="userName"
          onChange={this.handleChange}
          value={account.userName}
          type="text"
          error={errors.userName}
        />

        <Input
          label="Password"
          name="password"
          onChange={this.handleChange}
          value={account.password}
          type="password"
          error={errors.password}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default LogIn;
