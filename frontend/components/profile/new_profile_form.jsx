import React from "react";
import { Link } from "react-router-dom";

export default class NewProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.profile;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectHome = this.redirectHome.bind(this);
    // debugger
  }

  // -> tabs with separate form!! = NOT done
  
  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.props.submitForm(this.state);
    this.redirectHome();
  }

  redirectHome() {
    this.props.history.push('/')
  }
  
  update = field => {
    // how to setState for segment of state?
    return e => this.setState(
      { [field]: e.target.value }
    )
  };

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
      <div className="profile-settings center-simple">
        <div id="profile-form">
          <span className="form-title">My Account</span>
          <span className="right-align">* is required</span>

          <form onSubmit={this.handleSubmit}>
              
            <div className="form-input">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                id="first-name"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="text-input"
              />
            </div>
              
            <div className="form-input">
              <label htmlFor="first-name">Last name</label>
              <input
                type="text"
                id="last-name"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="text-input"
              />
              </div>
              
            {/* <div className="form-input">
              <label htmlFor="birthday">Birthday</label>
              <input
                type="date"
                id="birthday"
                value={this.state.birthday}
                onChange={this.update('birthday')}
                className="date-input"
              />
            </div> */}
            
            <div className="form-input" onChange={this.update('gender')}>
              <label htmlFor="gender-radio-group">Gender</label>

              <div id="gender-radio-group">
                <div className="radio-item">
                  <label>
                    <input type="radio" value="Male"
                      name="gender" /> Male
                  </label>
                </div>

                <div className="radio-item">
                  <label>
                    <input type="radio" value="Female"
                      name="gender" /> Female
                  </label>
                </div>

                <div className="radio-item">
                  <label>
                    <input type="radio" value="Not specified"
                      name="gender" /> Not specified
                  </label>
                </div>

              </div>
            </div>

            <div className="form-input">
              <label htmlFor="cameras">Cameras</label>
              <input
                type="text"
                id="cameras"
                value={this.state.cameras}
                onChange={this.update('cameras')}
                className="text-input"
              />
              </div>
            
            <div className="form-input">
              <label htmlFor="lenses">Lenses</label>
              <input
                type="text"
                id="lenses"
                value={this.state.lenses}
                onChange={this.update('lenses')}
                className="text-input"
              />
            </div>
            <button type="submit"
              className="save-profile">Save changes</button>
            <button type="submit"
              className="continue-profile-form">or continue</button>
          </form>
        </div>
      </div>
    )
  }
}