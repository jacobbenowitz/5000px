import React from "react";
import { Link } from "react-router-dom";

export default class SessionForm extends React.Component {
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

  render() {

    return (
      <div id="session-form">
        <h2>Log in</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <label>Password
            <input
              type="password"
              onChange={this.update('password')}
            />
          </label>
          <button type="submit">Log in</button>
          <span>Don't have an account? <Link to={'/signup'}>Sign up</Link></span>
        </form>
      </div>
    )
  }
}