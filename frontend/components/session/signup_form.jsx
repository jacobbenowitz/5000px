import React from "react";
import { Link } from "react-router-dom";

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
  }

  update = type => {
    return e => {
      this.setState({ [type]: e.target.value });
    }
  }

  render() {
    return (
      <div id="new-user-form">
        <h2>Create an account</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <label>Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <label>Password
            <input
              type="password"
              onChange={this.update('password')}
            />
          </label>
          <button type="submit">Create account</button>
          <span>Already got an account? <Link to={'/login'}>Log in</Link></span>
        </form>
      </div>
    )
  }
}