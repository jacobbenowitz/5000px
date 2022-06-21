import React from "react";
import { Link } from "react-router-dom";
import Demo from "../../demo/demo_user_signup";
import NewProfileForm from "../profile/new_profile_form";

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      userId: undefined,
      profileId: undefined,
      showProfileForm: false,
      profileCreated: false,
    };
    this.bindHandlers()
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.clearSessionErrors()
  }

  componentDidUpdate() {
    const { currentUserId, currentProfileId, createProfile } = this.props;

    if (currentUserId !== null && currentUserId !== this.state.userId &&
      this.state.profileCreated === false) {
      let profile = {
        first_name: '',
        last_name: '',
        website_url: '',
        instagram_url: '',
        lenses: '',
        cameras: '',
        birthday: '',
        city: '',
        country: '',
        about: '',
        gender: 'Not specified',
        user_id: currentUserId,
      }
      createProfile(profile)
      this.setState({
        userId: currentUserId,
        profileCreated: true
      })
    } else if (this.state.profileCreated && currentProfileId !== null &&
      this.state.profileId !== currentProfileId) {
        this.setState({profileId: currentProfileId})
      }
  }

  bindHandlers() {
    this.handleSignup = this.handleSignup.bind(this);
    this.demoSignup = this.demoSignup.bind(this);
    this.checkAllFields = this.checkAllFields.bind(this)
    this.redirectHome = this.redirectHome.bind(this)
  }

  handleSignup(e) {
    e.preventDefault();
    const { currentUserId, signup } = this.props;
    const { username, email, password, password2 } = this.state;

    const user = {
      username: username,
      email: email,
      password: password
    }

    if (username.length !== 0 && email.length !== 0 && password2.length !== 0) {
      signup(user)
      this.props.sessionMessage(['Account created successfully'])
      this.props.openModal("success");
      this.setState({
        showProfileForm: true
      })
    }

  }

  update = type => {
    return e => {
      this.setState({ [type]: e.target.value });
    }
  }

  redirectHome() {
    this.props.history.push('/home')
  }

  demoScript(e) {
    e.preventDefault();
    Demo.demoSignupForm();
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

  checkAllFields() {
    const { username, email, password, password2 } = this.state;
    // check all fields, if all valid return true, else return false
    if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email) && 
      username.length > 4 && password.length > 5 && password === password2
    ) { return true } else return false 
  }

  render() {
    const { updateProfile, errors, history } = this.props;
    const { username, email, password, password2, showProfileForm, profileId } = this.state;

    let frontendErrors, passwordError, password2Error, emailError, usernameError, newProfileFrom, newUserForm;

    usernameError = (
      <div className='session-error'>
        {(username.length > 4) ?
          <i className="fa-solid fa-circle-check"></i>
          :
          <i className="fa-solid fa-circle-xmark"></i>
        }
        <span>Username must be at least 5 characters</span>
      </div>
    )

    emailError = (
      <div className="session-error">
        {
          (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email) ? 
            <i className="fa-solid fa-circle-check"></i>
          :
            <i className="fa-solid fa-circle-xmark"></i>
        }
        <span>Email must be a valid address</span>
      </div>
    )

    passwordError = (
      <div className='session-error'>
        {(password.length < 5) ?
          <i className="fa-solid fa-circle-xmark"></i>
          :
          <i className="fa-solid fa-circle-check"></i>
        }
        <span>Password must be least 6 characters</span>
      </div>
    )

    password2Error = (
      <div className='session-error'>
        {(password !== password2 || password === '') ?
          <i className="fa-solid fa-circle-xmark"></i>
          :
          <i className="fa-solid fa-circle-check"></i>
        }
        <span>Passwords must match</span>
      </div>
    )

    if (username.length) {
      frontendErrors = (
        <div className='session-error-wrapper'>
          {usernameError}
        </div>
      )
    }

    if (email.length) {
      frontendErrors = (
        <div className='session-error-wrapper'>
          {usernameError}
          {emailError}
        </div>
      )
    }

    if (password.length) {
      frontendErrors = (
        <div className='session-error-wrapper'>
          {usernameError}
          {emailError}
          {passwordError}
        </div>
      )
    }

    if (password2.length) {
      frontendErrors = (
        <div className='session-error-wrapper'>
          {usernameError}
          {emailError}
          {passwordError}
          {password2Error}
        </div>
      )
    }

    if (showProfileForm) {
      newProfileFrom = (
        <NewProfileForm 
          updateProfile={updateProfile}
          profileId={profileId}
          history={history}
          errors={errors}
          redirectHome={this.redirectHome}
        />
      )
    }

    if (!showProfileForm) {
      newUserForm = (
        <div id="session-form">
          <h3>Join 5000px</h3>
          <form onSubmit={this.handleSignup}>
            {this.renderErrors()}
            <div className="form-input">
              <label htmlFor="username-signup">Username</label>
              <input
                type="text"
                id="username-signup"
                className="text-input"
                value={username}
                onChange={this.update('username')}
              />
            </div>
            <div className="form-input">
              <label htmlFor="email-signup">Email</label>
              <input
                type="email"
                id="email-signup"
                className="text-input"
                value={email}
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
                value={password}
              />
            </div>

            <div className="form-input">
              <label htmlFor="password2-signup">Confirm password</label>
              <input
                type="password"
                id="password2-signup"
                className="text-input"
                onChange={this.update('password2')}
                value={password2}
              />
            </div>

            {frontendErrors}

            <button className={this.checkAllFields() ? "signup" :
              "signup disabled"}
              id="submit-signup"
              type="submit"
            >
              Create account
            </button>

            <button className="demo_button"
              id="demo-signup"
              onClick={this.demoScript}
            >
              Demo signup
            </button>

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
      )
    }

    return (
      <div className="session center-simple">
        {newProfileFrom}
        {newUserForm}
      </div>
    )
  }
}