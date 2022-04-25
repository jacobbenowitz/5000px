import React from "react";

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.profile,
      user: this.props.user
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.currentUser.id;
    // debugger
    this.props.fetchUser(id);
  }

  /// SEPERATE USERNAME and EMAIL from profile
  // -> tabs with separate form!!
  
  handleSubmit(e) {
    e.preventDefault();
    // check if user has a profile
    // if yes, then update(this.state)
    // if no, then create(this.state)
    this.props.submitForm(this.state.profile);
  }
  
  update = field => {
    // how to setState for segment of state?
    return e => this.setState(
      {
        profile:
          { [field]: e.target.value }
      }
    )
  };

  render() {
    const { profile, user} = this.props;

    return (
      <div className="profile-settings center-simple">
        <div id="profile-form">
          <span className="form-title">My Account</span>
          <span className="right-align">* is required</span>

          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={this.state.user.username}
                onChange={this.update('username')}
                className="text-input"
              />
            </div>
            
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={this.state.user.email}
                onChange={this.update('email')}
                className="text-input"
              />
            </div>
              
            <div className="form-input">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                id="first-name"
                value={this.state.profile.first_name}
                onChange={this.update('first_name')}
                className="text-input"
              />
            </div>
              
            <div className="form-input">
              <label htmlFor="first-name">Last name</label>
              <input
                type="text"
                id="last-name"
                value={this.state.profile.last_name}
                onChange={this.update('last_name')}
                className="text-input"
              />
              </div>
              
            <div className="form-input">
              <label htmlFor="birthday">Birthday</label>
              <input
                type="date"
                id="birthday"
                value={this.state.profile.birthday}
                onChange={this.update('birthday')}
                className="date-input"
              />
              </div>
              
            <div className="form-input" onChange={this.update('gender')}>
              <label htmlFor="gender-radio-group">Gender</label>
              <div id="gender-radio-group">
                <div className="radio-item">
                  <input type="radio" 
                    value="Male" 
                    name="gender[male]"
                    />
                    <label htmlFor="gender[male]">Male</label>
                </div>
                <div className="radio-item">
                  <input type="radio" 
                    value="Female" 
                    name="gender[female]"
                  />
                  <label htmlFor="gender[female]">Female</label>
                </div>
                <div className="radio-item">
                  <input type="radio"
                    value="Not specified"
                    name="gender[not-specified]"
                  />
                  <label htmlFor="gender[not-specified]">Not specified</label>
                </div>
              </div>
            </div>

            <div className="form-input">
              <label htmlFor="cameras">Cameras</label>
              <input
                type="text"
                id="cameras"
                value={this.state.profile.cameras}
                onChange={this.update('cameras')}
                className="text-input"
              />
              </div>
            
            <div className="form-input">
              <label htmlFor="lenses">Lenses</label>
              <input
                type="text"
                id="lenses"
                value={this.state.profile.lenses}
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