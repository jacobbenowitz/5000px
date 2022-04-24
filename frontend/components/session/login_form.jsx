import React from "react";
import { Link } from "react-router-dom";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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

  renderErrors() {
    return (
      <div className="error-modal">
        <ul className="error-list">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}> 
              {error}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="session center-simple">
        <div id="session-form">
          <h3>Log in to 5000px</h3>
          <form onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <div className="form-input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={this.state.username}
                onChange={this.update('username')}
                className="text-input"
              />
            </div>
            <div className="form-input">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                onChange={this.update('password')}
                className="text-input"
              />
            </div>
            <button type="submit" className="login">Log in</button>
            <span className="alt-session-link">
              <p>Don't have an account?</p>
              <Link to={'/signup'}>Sign up</Link>
            </span>
          </form>
        </div>
      </div>
    )
  }
}