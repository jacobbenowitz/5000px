import React from "react";
import { Link } from "react-router-dom";

export default class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile;
    this.handleSubmit = this.handleSubmit.bind(this);
    debugger
  }

  componentDidMount() {
    this.props.fetchProfile(this.props.profile.id);
  }

  // -> tabs with separate form!! = NOT done
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
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
    debugger
    return (
      <div className="profile-settings center-simple">
        <div id="profile-form">
          <div className="profile-form-title">
            <span>My Account</span>
          </div>

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
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                id="last-name"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="text-input"
              />
            </div>

            <div className="form-input">
              <label htmlFor="first-name">About</label>
              <textarea
                id="about"
                value={this.state.about}
                onChange={this.update('about')}
                className="textarea-input"
              />
            </div>
            
            <div className="form-input">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={this.state.city}
                onChange={this.update('city')}
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
              <label className="radio-title"
                htmlFor="gender-radio-group">Gender</label>

              <div id="gender-radio-group" className="radio-group">
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
          </form>
        </div>
      </div>
    )
  }
}