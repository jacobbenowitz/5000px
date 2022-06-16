import React from "react";
import CoverPhotoLoader from "../content_loaders/cover_photo_loader";
import { AvatarLg } from "../../avatar/avatar_lg";
import ProfileDetailsLoader from "../content_loaders/profile-details-loader";
import { ProfileDetails } from "./profile_details";
import ProfileRows from "./profile_photo_gallery";
import ProfileAvatarInput from "./profile_avatar_input";
import ProfileCoverInput from "./profile_cover_input";
import { sortPhotosByRecent } from "../../../reducers/selectors";
import GridLoader from "../../galleries/gallery_grid_loader";

const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'

export default class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      status: IDLE,
      profilePhotos: [],
      showFollowsModal: false,
      showFollowingModal: false,
    }
    this.toggleFollowsModal = this.toggleFollowsModal.bind(this)
    this.toggleFollowingModal = this.toggleFollowingModal.bind(this)
  }

  componentWillUnmount() {
    this.setState({
      status: IDLE,
      id: null,
      profilePhotos: [],
    })
  }

  componentDidMount() {
    const { profileId, fetchProfile, fetchProfiles, getFollows } = this.props;
    window.scrollTo(0, 0)
    fetchProfile(profileId)
    fetchProfiles()
    getFollows()
  }

  componentDidUpdate() {
    const { status, id, profilePhotos  } = this.state;
    const { profile, profileId, fetchPhoto,
      fetchProfile, fetchProfiles, getFollows } = this.props;

    if (profileId != id && status !== BUSY) {
      // debugger
      this.setState({
        id: profileId,
        status: IDLE,
      })
      fetchProfile(profileId)
      fetchProfiles()
      getFollows()
    }
    if (status === IDLE && profile && profileId == profile.id
      && profile.photoIds.length !== profilePhotos.length) {
      // debugger
      this.setState({ status: BUSY })
      let photos = [];
      let fetches = [];

      profile.photoIds.forEach(photoId =>
        fetches.push(fetchPhoto(photoId)));

      Promise.all(fetches).then(res => {
        photos = res.map(action => action.photo.photo)
        this.setState({
          status: DONE,
          profilePhotos: sortPhotosByRecent(photos)
        })
      });
    }
  }

  toggleFollowsModal(e) {
    e.preventDefault()
    // e.stopPropagation()
    this.setState({ showFollowsModal: !this.state.showFollowsModal })
  }

  toggleFollowingModal(e) {
    e.preventDefault()
    // e.stopPropagation()
    this.setState({ showFollowingModal: !this.state.showFollowingModal })
  }


  render() {
    const { profile, user, isCurrentProfile, updateProfilePhoto, currentProfile, allFollows, createFollow, removeFollow, getFollows, fetchProfile } = this.props;
    const { status, profilePhotos, showFollowsModal, showFollowingModal } = this.state;

    let avatar, cover, coverStyle, photoGallery;

    if (profile?.cover) {
      coverStyle = (
        {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${profile.cover})`
        }
      )
      // todo: add fallback image or content placeholder in else statement
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

    if (status === DONE) {
      photoGallery = <ProfileRows photos={profilePhotos} />
    } else {
      photoGallery = <GridLoader />
    }
    return (
      <div className="profile-show-container" >
        <div className="profile-cover-container">
          {avatar}
          {cover}
        </div>

        <section className="profile-details-container">
          {profile ? (
            <ProfileDetails
              profile={profile}
              user={user}
              isCurrentProfile={isCurrentProfile}
              allFollows={allFollows}
              createFollow={createFollow}
              removeFollow={removeFollow}
              currentProfile={currentProfile}
              showFollowsModal={showFollowsModal}
              showFollowingModal={showFollowingModal}
              toggleFollowsModal={this.toggleFollowsModal}
              toggleFollowingModal={this.toggleFollowingModal}
              fetchProfile={fetchProfile}
            />
          ) : (
            <div className="profile-details-container">
              <ProfileDetailsLoader />
            </div>
          )}
        </section>

        {photoGallery}

      </div>
    )
  }
}