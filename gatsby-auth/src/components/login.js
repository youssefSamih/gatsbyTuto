import React, { Component } from 'react';
import { navigate } from 'gatsby';

import { handleLogin, isLoggedIn } from '../services/auth';

class Login extends Component {
  state = {
    username: ``,
    password: ``
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    handleLogin(this.state);
  }

  render() {
    if(isLoggedIn()){
      navigate(`/app/profile`);
    }
    return (
      <>
        <h1>Log in</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event);
            navigate(`/app/profile`);
          }}
        >
          <label htmlFor="">
            Username
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <label htmlFor="">
            Password
            <input 
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <input type="submit" value="Log In" />
        </form>
      </>
    )
  }
}

export default Login;
