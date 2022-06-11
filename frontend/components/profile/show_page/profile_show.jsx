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
      fetchPhotos, fetchProfile } = this.props;
    
    window.scrollTo(0, 0)

    this.setState({ status: BUSY }, () => {
      fetchProfile(profileId)
      fetchPhotos() 
    })
  }

  componentDidUpdate() {
    const {status} = this.state;
    const { photos, profile, profileId } = this.props;
    

    if (status === BUSY && photos.length && Object.values(profile)) {
      this.setState({status: DONE})
    }
    if ((status === DONE || status === IDLE) && !photos.length) {
      fetchPhotos()
      fetchProfile(profileId)
    }
  }


  render() {
    const { profile, user, photos, isCurrentProfile,
      updateProfilePhoto } = this.props;
    const { status } = this.state;

    let avatar, cover, coverStyle;

    if (profile?.cover) {
      coverStyle = (
        {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${profile.cover})`
        }
      ) // add fallback image or content placeholder in else statement
    } else {
      coverStyle = (
        {
          backgroundImage: 'linear-gradient(315deg, #485461 0 %, #28313b 74 %)',
          backgroundColor: '#485461'
        }
      )
    }


    if (isCurrentProfile && profile) {
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
    } else if (!isCurrentProfile && profile) {
      avatar = (
        <div className="profile-avatar-container">
          <AvatarLg
            profile={profile}
          />
        </div>
      )
      cover = (
          <div className="cover-img-box profile" style={coverStyle} />
      )
    } else {
      cover = (
        <CoverPhotoLoader />
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