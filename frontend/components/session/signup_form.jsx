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
      password: "",
      password2: "",
    };
    this.bindHandlers()
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.clearErrors()
    debugger
  }

  bindHandlers() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSignup = this.demoSignup.bind(this);
    this.checkAllFields = this.checkAllFields.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const { receiveErrors, currentUserId, processForm } = this.props;
    const user = Object.assign({}, this.state);
    if (this.state.username.length === 0 || this.state.email.length === 0 || this.state.password.length === 0) {
      // use openModal instead
      // console.log(['must fill in all fields'])
    } else {
      processForm(user).then(user => {
        this.props.history.push('/profile/new')
        this.props.sessionMessage(['Account created successfully'])
        this.props.openModal("success");
      })
    }

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
    const { username, email, password, password2 } = this.state;
    let frontendErrors, passwordError, password2Error, emailError, usernameError;

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

    return (
      <div>
        <h1>TESTING</h1>
      </div>
      // <div className="session center-simple">
      //   <div id="session-form">
      //     <h3>Create an account</h3>
      //     <form onSubmit={this.handleSubmit}>
      //       {this.renderErrors()}
      //       <div className="form-input">
      //         <label htmlFor="username-signup">Username</label>
      //         <input
      //           type="text"
      //           id="username-signup"
      //           className="text-input"
      //           value={username}
      //           onChange={this.update('username')}
      //         />
      //       </div>
      //       <div className="form-input">
      //         <label htmlFor="email-signup">Email</label>
      //         <input
      //           type="email"
      //           id="email-signup"
      //           className="text-input"
      //           value={email}
      //           onChange={this.update('email')}
      //         />
      //       </div>
      //       <div className="form-input">
      //         <label htmlFor="password-signup">Password</label>
      //         <input
      //           type="password"
      //           id="password-signup"
      //           className="text-input"
      //           onChange={this.update('password')}
      //           value={password}
      //         />
      //       </div>

      //       <div className="form-input">
      //         <label htmlFor="password2-signup">Confirm password</label>
      //         <input
      //           type="password"
      //           id="password2-signup"
      //           className="text-input"
      //           onChange={this.update('password2')}
      //           value={password2}
      //         />
      //       </div>

      //       {frontendErrors}

      //       <button className={this.checkAllFields() ? "signup" :
      //         "signup disabled"}
      //         id="submit-signup"
      //         type="submit"
      //       >
      //         Create account
      //       </button>

      //       <button className="demo_button"
      //         id="demo-signup"
      //         onClick={this.demoScript}
      //       >
      //         Demo signup
      //       </button>

      //       <span className="alt-session-link">
      //         <p>Already got an account?</p>
      //         <Link to={'/login'}>Log in</Link>
      //       </span>

      //     </form>

      //     <button
      //       onClick={this.demoSignup}
      //       id="hidden-demo">Demo only
      //     </button>

      //   </div>
      // </div>
    )
  }
}