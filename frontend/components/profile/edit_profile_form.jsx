import React from "react";
import { Link } from "react-router-dom";
import ProfilePhotoFormContainer from "../photos/profile_photo_form_container";
import ProfileAvatar from "./profile_avatar"

export default class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
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
      user_id: undefined,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { profile, fetchProfile, profileId } = this.props;

    profile ? (
      this.setState({
        id: profile.id,
        first_name: profile.first_name,
        last_name: profile.last_name,
        website_url: profile.website_url,
        instagram_url: profile.instagram_url,
        lenses: profile.lenses,
        cameras: profile.cameras,
        birthday: profile.birthday ? profile.birthday : "",
        city: profile.city,
        country: profile.country,
        about: profile.about,
        gender: profile.gender,
        user_id: profile.user_id,
      })
    ) : (
      fetchProfile(profileId)
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.props.history.goBack()
  }

  update = field => {
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
    let userGender = this.state.gender;
    const { first_name, last_name, profile_avatar, profile_banner, website_url, instagram_url, lenses, cameras, birthday, city, country, about, gender, user_id } = this.state;
    const { profile } = this.props;
    
    return (
      <div className="profile-settings center-simple">
        <div id="profile-form">
          {/* <div id="profile-photo-form"> */}
            {/* <div className="avatar-container-sm">
              <img src={profile.avatar} 
                className="avatar-img"
              />
            </div> */}
            {/* <ProfileAvatar
              avatar={profile.avatar}
            /> */}
            {/* <ProfilePhotoFormContainer /> */}
          {/* </div> */}

          <div className="profile-form-title">
            <h4>My Account</h4>
          </div>

          <form onSubmit={this.handleSubmit}>

            <div className="form-input">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                id="first-name"
                value={first_name}
                onChange={this.update('first_name')}
                className="text-input"
              />
            </div>

            <div className="form-input">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                id="last-name"
                value={last_name}
                onChange={this.update('last_name')}
                className="text-input"
              />
            </div>

            <div className="form-input">
              <label htmlFor="first-name">About</label>
              <textarea
                id="about"
                value={about}
                onChange={this.update('about')}
                className="textarea-input"
              />
            </div>

            <div className="form-input">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={this.update('city')}
                className="text-input"
              />
            </div>

            <div className="form-input">
              <label htmlFor="birthday">Birthday</label>
              <input
                type="date"
                id="birthday"
                value={birthday}
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
                      checked={gender === 'Male' ? true : false}
                      type="radio" value="Male"
                      name="gender" /> Male
                  </label>
                </div>

                <div className="radio-item">
                  <label>
                    <input
                      onChange={this.update('gender')}
                      checked={gender === 'Female' ? true : false}
                      type="radio" value="Female"
                      name="gender" /> Female
                  </label>
                </div>

                <div className="radio-item">
                  <label>
                    <input
                      onChange={this.update('gender')}
                      checked={gender === "Not specified" ? true : false}
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
                value={cameras}
                onChange={this.update('cameras')}
                className="text-input"
              />
            </div>

            <div className="form-input">
              <label htmlFor="lenses">Lenses</label>
              <input
                type="text"
                id="lenses"
                value={lenses}
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