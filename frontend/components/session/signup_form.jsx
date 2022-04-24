import React from "react";
import { Link } from "react-router-dom";
import Demo from "../../demo/demo_user_signup"

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
  }

  update = type => {
    return e => {
      this.setState({ [type]: e.target.value });
    }
  }

  demoLogin(e) {
    e.preventDefault();
    Demo.demoSignupForm();
  }

  render() {
    return (
      <div className="session center-simple">
        <div id="session-form">
          <h3>Create an account</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label htmlFor="username-signup">Username</label>
              <input
                type="text"
                id="username-signup"
                className="text-input"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </div>
            <div className="form-input">
              <label htmlFor="email-signup">Email</label>
              <input
                type="email"
                id="email-signup"
                className="text-input"
                value={this.state.email}
                onChange={this.update('email')}
            />
            </div>
            <div className="form-input">
              <label htmlFor="password-signup">Password</label>
              <input
                type="password"
                id="password-signup"
                className="text-input"
                onChange={this.update('password')}
              />
            </div>

            <button className="signup"
              id="submit-signup"
              type="submit">Create account</button>
            
            <button className="demo_button"
              id="demo-signup"
              onClick={this.demoLogin}
            >Demo login</button>
            
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