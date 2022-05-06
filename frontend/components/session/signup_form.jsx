import React from "react";
import { Link } from "react-router-dom";
import Demo from "../../demo/demo_user_signup";

const submitPromise = (milliseconds) => {
  return new Promise(resolve => 
  setTimeout(resolve, milliseconds))
}

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.bindHandlers()
  }

  bindHandlers() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSignup = this.demoSignup.bind(this);
    this.redirectCreateProfile = this.redirectCreateProfile.bind(this);

  }

  redirectCreateProfile() {
    this.props.history.push('/profile/new');
  }

  handleSubmit(e) {
    e.preventDefault();
    const { receiveErrors, currentUserId, processForm } = this.props;
    const user = Object.assign({}, this.state);
    if (this.state.username.length === 0 || this.state.email.length === 0 || this.state.password.length === 0) {
      // use openModal instead
      console.log(['must fill in all fields'])
    } else {
      processForm(user).then(user => {
        // debugger
        this.redirectCreateProfile();
        this.props.openModal("success");
      })
    }
    
    // TODO: create empty profile, but need user id inside of emptyProfile!
    // can we chain a .then(createProfile) on the session signup thunk action?
    // this.props.createProfile(this.props.emptyProfile);
  }

  update = type => {
    return e => {
      this.setState({ [type]: e.target.value });
    }
  }

  demoScript(e) {
    e.preventDefault();
    Demo.demoSignupForm();
  }

  demoSignup = (e) => {
    e.preventDefault();
    const user = {
      username: 'Guest',
      password: 'password'
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
          <h3>Create an account</h3>
          <form onSubmit={this.handleSubmit}>
            {this.renderErrors()}
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
              onClick={this.demoScript}
            >Demo account</button>

            <span className="alt-session-link">
              <p>Already got an account?</p>
              <Link to={'/login'}>Log in</Link>
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