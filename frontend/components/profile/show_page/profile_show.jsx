import React from "react";
import { selectProfilePhotos } from "../../../reducers/selectors";
import { Link } from "react-router-dom";

export default class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.profile,
      user: this.props.user,
      photos: [],
    };
  };
  updatePhotos = photos => {
    debugger
    this.setState({
      photos: selectProfilePhotos(photos, this.props.profile.photoIds),
    });
  }

  componentDidMount() {
    this.props.fetchProfile(this.props.profileId).then((profile) => {
      debugger
      this.setState({ profile: profile }, () => {
        this.props.fetchPhotos().then(photos => {
          this.updatePhotos(photos);
        });
      })
      })
  };


  render() {
    const {profile, isCurrentUsersProfile} = this.props;
    debugger
    if (this.state.photos.length === 0) {
      return ( <h2>Loading...</h2>
      )
    } else {
      debugger
      { }
      return (
        <div id="photos-index-test">
          <div className="profile-header">
            <div className="profile-cover-container">
              {/* <img className="profile-avatar" src={}></img> */}
              {/* <img className="cover-photo" src={}></img> */}
            </div>
            <div className="profile-details">
              <div className="profile-icon-list">
                {/* {isCurrentUsersProfile ? < edit icons -> cover photo form >  } */}
              </div>
              {/* profile name */}
              {/* follow button */}
            </div>
          </div>
          <div className="photo-gallery">
            {this.state.photos.map(photo => {
              return ( 
                <Link to={`/photos/${photo.id}`}>
                  <div key={photo.id} className="photo-container">
                    <div className="photo-overlay"> 
                      <h5>{photo.title}</h5>
                    </div>
                    <img src={ photo.photoUrl } />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )
    }
  }
}