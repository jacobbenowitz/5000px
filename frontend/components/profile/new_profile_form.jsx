import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import ProfilePhotoFormContainer from "../photos/profile_photo_form_container";
import ProfileAvatarContainer from "./profile_avatar_container"


export default class NewProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      profile_avatar: '',
      profile_banner: '',
      website_url: '',
      instagram_url: '',
      lenses: '',
      cameras: '',
      birthday: '',
      city: '',
      country: '',
      about: '',
      gender: 'Not specified',
      user_id: null
    };
    this.bindHandlers();
  }
  
  bindHandlers() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectHome = this.redirectHome.bind(this);
  }

  componentDidMount() {
    const { userId } = this.props;

    if (userId === null) {
      <Redirect to={'/signup'} />
    } else if (this.state.user_id !== userId) {
      this.setState({
        user_id: userId
      })
    }
    window.addEventListener('beforeunload',
      this.beforeUnloadListener, { capture: true });
    const skip = document.querySelector('.skip-profile-form');
    const submit = document.querySelector('.save-profile');
    
    const links = document.querySelectorAll('a');

    [...links].forEach((link) => {
      if (link !== skip && link !== submit) {
        link.addEventListener('click', this.clickPreventListener)
      }
    });
  }


  beforeUnloadListener = event => {
    event.preventDefault();
    event.returnValue = "Don't leave without saving your profile!";
  }

  clickPreventListener(event){
    event.preventDefault();
    return confirm("Don't leave without saving your profile!");
  }



  // -> tabs with separate form!! = NOT done'

  
  handleSubmit(e) {
    e.preventDefault();

    const skip = document.querySelector('.skip-profile-form');
    const submit = document.querySelector('.save-profile');
    const links = document.querySelectorAll('a');

    [...links].forEach((link) => {
      if (link !== skip && link !== submit) {
        link.removeEventListener('click', this.clickPreventListener)
      }
    });

    window.removeEventListener('beforeunload', this.beforeUnloadListener, {capture: true});

    const formData = Object.assign({}, this.state,
      { user_id: this.props.userId} )
    
    // debugger
    if (this.props.userId !== null) {
      this.props.submitForm(formData)
      this.redirectHome();
    }
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
          <div id="profile-photo-form">
            {/* <ProfileAvatarContainer />
            <ProfilePhotoFormContainer></ProfilePhotoFormContainer> */}
          </div>

          <div className="profile-form-title">
            <span className="profile-title-copy">My Account</span>
            <span className="profile-form-instructions">Create your profile <a onClick={this.handleSubmit} className="skip-profile-form" href="#">or skip</a></span>
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
              
            <div className="form-input">
              <label htmlFor="birthday">Birthday</label>
              <input
                type="date"
                id="birthday"
                value={this.state.birthday}
                onChange={this.update('birthday')}
                className="date-input"
              />
            </div>
            
            <div className="form-input" >
              <label className="radio-title"
                htmlFor="gender-radio-group">Gender</label>

              <div id="gender-radio-group" className="radio-group">
                <div className="radio-item">
                  <label>
                    <input
                      onChange={this.update('gender')}
                      type="radio" value="Male"
                      name="gender" /> Male
                  </label>
                </div>

                <div className="radio-item">
                  <label>
                    <input
                      onChange={this.update('gender')}
                      type="radio" value="Female"
                      name="gender" /> Female
                  </label>
                </div>

                <div className="radio-item">
                  <label>
                    <input
                      onChange={this.update('gender')}
                      defaultChecked
                      type="radio" value="Not specified"
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
              className="save-profile">Create profile</button>
          </form>
        </div>
      </div>
    )
  }
}