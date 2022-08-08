import React from 'react';

class Register extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submited');
  };
  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h2>Register</h2>
        <div class="form-group m-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group m-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Register;
