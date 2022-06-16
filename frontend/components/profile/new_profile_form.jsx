import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TextareaAutosize from "react-textarea-autosize";


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

  componentWillUnmount() {
    const profile = Object.assign({}, this.state,
      { user_id: this.props.userId })
    this.props.submitForm(profile)
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

    const profile = Object.assign({}, this.state,
      { user_id: this.props.userId} )
    if (this.props.userId !== null) {
      this.props.submitForm(profile)
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


  buildUrl(url) {
    if (url.includes('https://www.')) {
      return url
    } else {
      return 'https://www.' + url
    }
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
            <span className="profile-title-copy">
              My Account
            </span>
            <span className="profile-form-instructions">
              Create your profile
            </span>
            <span className="skip-profile-form"
              onClick={this.handleSubmit}
            >
              or skip for now
            </span>
          </div>

          <form
            className="profile-form-container"
            onSubmit={this.handleSubmit}
          >
              
            <div className="form-input">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                id="first-name"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="text-input"
                placeholder="First name"
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
                placeholder="Last name"
              />
            </div>

            <div className="form-input">
              <label htmlFor="website_url">Personal website</label>
              <input
                type="text"
                id="website_url"
                value={
                  this.state.website_url.length ? this.buildUrl(this.state.website_url) : ''
                }
                onChange={this.update('website_url')}
                className="text-input"
                placeholder="https://www.mywebsite.com"
              />
            </div>

            <div className="form-input">
              <label htmlFor="instagram">Instagram</label>
              <input
                type="text"
                id="instagram_url"
                value={this.state.instagram_url}
                onChange={this.update('instagram_url')}
                className="text-input"
                placeholder="Instagram handle"
              />
            </div>

            <div className="form-input">
              <label htmlFor="about">About</label>
              <TextareaAutosize
                id="about"
                value={this.state.about}
                onChange={this.update('about')}
                className="textarea-input"
                placeholder="Introduce yourself to the community!"
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
                placeholder="City"
              />
            </div>

            <div className="form-input">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                value={this.state.country}
                onChange={this.update('country')}
                className="text-input"
                placeholder="Country"
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
                placeholder="What's your go-to camera?"
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
                placeholder="Which lens do you use for that bokkah?"
              />
            </div>
            <button
              type="submit"
              className="save-profile"
            > Create profile
            </button>
          </form>
        </div>
      </div>
    )
  }
}