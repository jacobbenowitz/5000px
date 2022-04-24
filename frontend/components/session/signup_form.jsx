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
      <div className="session center-simple">
        <div id="session-form">
          <h3>Create an account</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="text-input"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="text-input"
                value={this.state.email}
                onChange={this.update('email')}
            />
            </div>
            <div className="form-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="text-input"
                onChange={this.update('password')}
              />
            </div>
            <button className="signup" type="submit">Create account</button>
            <span className="alt-session-link">
              <p>Already got an account?</p>
              <Link to={'/login'}>Log in</Link>
            </span>
          </form>
        </div>
      </div>
    )
  }
}