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
      user_id: '',
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

  componentDidUpdate() {
    const { profile } = this.props;
    if (profile && this.state.user_id.length === 0) {
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
    }
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

          <div className="profile-form-title">
            <h4>My Account</h4>
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
                value={first_name}
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
                value={last_name}
                onChange={this.update('last_name')}
                className="text-input"
                placeholder="Last name"
              />
            </div>

            <div className="form-input">
              <label htmlFor="website">Personal website</label>
              <input
                type="text"
                id="website_url"
                value={website_url}
                onChange={this.update('website_url')}
                className="text-input"
                placeholder="www.mywebsite.com"
              />
            </div>

            <div className="form-input">
              <label htmlFor="instagram">Instagram username</label>
              <input
                type="text"
                id="instagram_url"
                value={instagram_url}
                onChange={this.update('instagram_url')}
                className="text-input"
                placeholder="Instagram username"
              />
            </div>

            <div className="form-input">
              <label htmlFor="about">About</label>
              <textarea
                id="about"
                value={about}
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
                value={city}
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
                value={country}
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
                placeholder="What's your go-to camera?"
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
                placeholder="Which lens do you use for that bokkah?"
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