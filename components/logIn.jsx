import React from 'react';
import Input from './input';

class LogIn extends React.Component {
  state = {
    account: {
      userName: '',
      password: '',
    },
    errors: {}
  };

  validate = ()=>{
    const errors = {...this.state.errors}
    
    if(this.state.account.userName === ""){
      errors[userName] = "username maust"
    }
    if(this.state.account.password === ""){
      errors[password] = "password maust"
    }
    return errors
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate()
    if(errors){
      console.log(errors)
      return
    }
    console.log('submited');
  };
  handleChange = ({ target }) => {
    let account = { ...this.state.account };
    account[target.name] = target.value;
    this.setState({ account });
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
