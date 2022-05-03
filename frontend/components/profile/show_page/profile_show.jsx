import React from "react";
import { selectProfilePhotos } from "../../../reducers/selectors";
import { Link } from "react-router-dom";
import CoverPhotoLoader from "../content_loaders/cover_photo_loader";
import { AvatarLg } from "../../avatar/avatar_lg";
import ProfileDetailsLoader from "../content_loaders/profile-details-loader";
import { ProfileDetails } from "./profile_details";
import PhotoLoader from "../content_loaders/photo-loader";


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
    const { fetchProfile, profileId, fetchPhotos } = this.props;
    fetchProfile(profileId).then((profile) => {
      debugger
      this.setState({ profile: profile }, () => {
        fetchPhotos().then(photos => {
          this.updatePhotos(photos);
        });
      })
      })
  };


  render() {
    const { profile, isCurrentProfile } = this.props;
    const coverStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${profile.cover})`
  }
  
    debugger
    return (
      <div className="profile-show-container" >
        <div className="profile-cover-container">
          <div className="profile-avatar-container">
            <AvatarLg profile={profile} />
          </div>
          {profile.cover ? (
            <div className="cover-img-box"
              style={coverStyle}
            /> 
          ) : (
            <CoverPhotoLoader />
          )}
        </div>
        <section className="profile-details-container">
            {profile ? (
              <ProfileDetails profile={profile}
                isCurrentProfile={isCurrentProfile} />
            ) : (
            <div className="profile-loader-container">
              <ProfileDetailsLoader />
            </div>
            )}
        </section>
        <div className="profile-gallery-box">
          
          {/* {this.state.photos.map(photo => {
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
          })} */}
            

        </div>
      </div>
    )

    //       <div className="photo-gallery">
    //       </div>
    //     </div>
    //   )
    // }
  }
}