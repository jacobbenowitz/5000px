import React from "react";
import { Link } from "react-router-dom";
import demoLoginScript from "../../demo/demo_user_login";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm(this.state);
    this.setState({username: "", password: ""})
  }

  update = type => {
    return e => {
      this.setState({ [type]: e.target.value });
    }
  }

  demoLogin(e) {
    e.preventDefault()
    demoLoginScript.demoLoginForm()
  }

  demoSignup = (e) => {
    e.preventDefault();
    const user = {
      username: 'Guest',
      password: 'demo#User!806'
    }
    this.props.loginGuest(user);
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
                value={this.state.password}
              />
            </div>
            <button type="submit" className="login">
              Log in
            </button>

            <button className="demo_button"
              id="demo-signup"
              onClick={this.demoLogin}
            >Demo login</button>

            <span className="alt-session-link">
              <p>Don't have an account?</p>
              <Link to={'/signup'}>Sign up</Link>
            </span>
          </form>
          <button
            onClick={this.demoSignup}
            id="hidden-demo">Demo only
          </button>
        </div>
      </div>
    )
  }
}