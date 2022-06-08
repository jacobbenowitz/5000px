import React from "react";
import CoverPhotoLoader from "../content_loaders/cover_photo_loader";
import { AvatarLg } from "../../avatar/avatar_lg";
import ProfileDetailsLoader from "../content_loaders/profile-details-loader";
import { ProfileDetails } from "./profile_details";
import ProfileRows from "./profile_photo_gallery";
import ProfileAvatarInput from "./profile_avatar_input";
import ProfileCoverInput from "./profile_cover_input";

const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'

export default class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: IDLE
    }
  }
  
  componentDidMount() {
    const { photos, profile, profileId,
      fetchPhotos, fetchProfile } = this.props
    this.setState({ status: BUSY }, () => {
      fetchPhotos() 
      fetchProfile(profileId)
    })
  }

  componentDidUpdate() {
    const {status} = this.state;
    const { photos, profile } = this.props;
    
    if (status === BUSY && photos.length && Object.values(profile)) {
      this.setState({status: DONE})
    }
  }


  render() {
    const { profile, user, photos, isCurrentProfile, updateProfilePhoto } = this.props;
    const { status } = this.state;

    let coverStyle = profile.cover ? ({
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), 
      rgba(0, 0, 0, 0)), url(${profile.cover})`
    }) : (null);

    let avatar, cover;

    if (isCurrentProfile) {
      avatar = (
        <div className="profile-avatar-container">
          <ProfileAvatarInput
            profile={profile}
            currentAvatar={profile.avatar}
            updateProfilePhoto={updateProfilePhoto}
          />
        </div>
      )
      cover = (
        <ProfileCoverInput
          profile={profile}
          currentCover={profile.cover}
          updateProfilePhoto={updateProfilePhoto}
        />
      )
    } else {
      avatar = (
        <AvatarLg
          avatar={profile}
        />
      )
      cover = (
        profile.cover ? (
          <div className="cover-img-box" style={coverStyle} />
        ) : <CoverPhotoLoader />
      )
    }

    return ( 
      <div className="profile-show-container" >
        <div className="profile-cover-container">
          {avatar}
          {cover}
        </div>

        <section className="profile-details-container">
          { profile ? (
            <ProfileDetails
              profile={profile}
              user={user}
              isCurrentProfile={isCurrentProfile} />
            ) : (
            <div className="profile-loader-container">
              <ProfileDetailsLoader />
            </div>
            )}
        </section>
        
        {status === DONE  ?
          (
            <ProfileRows photos={photos}/>
          ) : (
            <span>Content loader here!</span>
          )}

      </div>
    )
  }
}