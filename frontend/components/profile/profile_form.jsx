import React from "react";

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.profile;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }
  
  update = field => {
    return e => this.setState(
      { [field]: e.target.value }
    )
  };

  render() {
    const { profile, formType } = this.props;

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
                value={this.state.username}
                onChange={this.update('username')}
                className="text-input"
              />
            </div>
            
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="text-input"
              />
            </div>
              
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
              
            <div className="form-input">
              <label htmlFor="gender-radio-group">Gender</label>
              <div id="gender-radio-group">
                <input type="radio" 
                  value="Male" 
                  name="gender"
                />
                
                <input type="radio" 
                  value="Female" 
                  name="gender"
                />
                
                <input type="radio"
                  value="Not specified"
                  name="gender"
                />
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
              className="save-profile"
              value="Save changes"
            />
          </form>
        </div>
      </div>
    )
  }
}