import React from "react";
import ReactDOM from "react-dom"
import PhotoActions from "./photo_actions";
import {timeSinceUplaod} from "../../util/todays_date_util"
import ProfileDetailsLoader from "./content-loaders/profile-details-loader";
import moment from 'moment';
import cameraIcons from "../../util/camera_icons";
import featuredIcons from "../../util/featured_icons";
import { Link } from "react-router-dom";

export default class PhotoProfileDetails extends React.Component {
  constructor(props) {
    super(props)
    this.setBeforeContent = this.setBeforeContent.bind(this)
  }

  setBeforeContent = (e) => {
    const featured = this.props.photo.featured;
    e.preventDefault()
    if (featured === 'editors') {
      e.currentTarget.setAttribute('data-before',
        "The photos featured in Editors' Choice are selected by our 5000px Editors.")
    } else if (featured === 'fresh') {
      e.currentTarget.setAttribute('data-before',
        "The photos featured in Fresh are newly added to 5000px!")
    } else if (featured === 'popular') {
      e.currentTarget.setAttribute('data-before',
        "The photos featured in Popular are recently added photos that are trending!") 
    } else if (featured === 'upcoming') {
      e.currentTarget.setAttribute('data-before',
        "The photos featured in Upcoming are newly posted photos with the most views!")
    }
  }

  getFeaturedIcon(type) {
    return type === 'editors' ? featuredIcons.editors :
    type === 'fresh' ? featuredIcons.fresh :
    type === 'popular' ? featuredIcons.popular :
    featuredIcons.upcoming
  } 

  render() {
    const { photo, photoId, photoProfile, isCurrentProfile, currentProfile, createLike, removeLike, likes, allLikes } = this.props;
    let likesDetails, likeCopy;
    
    if (likes.length > 0) {
      likeCopy = likes.length > 1 ? (
        <span className="photo-detail-title liked">
          {likes.length}&nbsp;people liked this photo
        </span>
      ) : (
        <span className="photo-detail-title liked">
          {likes.length}&nbsp;person liked this photo
        </span>
      )
        
      likesDetails = (
        <div className="detail-box" >
          <div className="flex-row">
              {likeCopy}
            <div className="right-arrow-wrapper">
              <i className="fa-solid fa-angle-right" />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="photo-detail-summary">
        <div className="inset-box">
          {photoProfile ? (
            <>
              <PhotoActions
                isCurrentProfile={isCurrentProfile}
                photo={photo}
                photoId={photoId}
                photoProfile={photoProfile}
                currentProfile={currentProfile}
                createLike={createLike}
                removeLike={removeLike}
                likes={likes}
                allLikes={allLikes}
              />
              <div className="profile-info">
                <Link to={`/profiles/${photo.profile_id}`}>
                  <div className="avatar-container">
                    <img className="user-avatar-lg" src={photoProfile.avatar}></img>
                  </div>
                </Link>
                <div className="user-details flex-col">
                  <h5 className="photo-show-title">{photo.title}</h5>
                  <div className="flex-row">
                    <span className="photo-user-name">
                      by&nbsp;•&nbsp;
                      <Link to={`/profiles/${photo.profile_id}`}>
                        {photo.profileName}
                      </Link>
                    </span>
                    <div>
                      <span className="follow-link">
                        {/* Follow <- blue || Following <- grey */}
                        &nbsp;•&nbsp;Follow</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="photo-details">
                <div className="detail-box">
                  <div className="flex-row gap-10">
                    <i className="fa-solid fa-map-pin fa-sm" />
                    <span className="photo-location" >
                      {photo.location}
                    </span>
                    <span className="photo-date">
                      <strong>Taken: </strong> {moment(photo.taken).fromNow()}
                    </span>
                    <span className="photo-date">
                      <strong>Uploaded: </strong> {moment(photo.created_at).fromNow()}
                    </span>
                  </div>
                </div>
            
                <div className="detail-box">
                  <p className="photo-description">{photo.description}</p>
                </div>

                <div className="detail-box">
                  <div className="flex-row ft-photo-header">
                    <span className="photo-detail-title">
                      {photo.featured.slice(0,1).toUpperCase() + photo.featured.slice(1)}
                    </span>
                    <div className="ft-info-icon-wrapper"
                      onMouseOver={this.setBeforeContent}
                    >
                      <i className="fa-solid fa-circle-info"></i>
                    </div>
                  </div>
                  <div className="featured-icon-wrapper">
                    {this.getFeaturedIcon(photo.featured)}
                  </div>
                </div>
                {likesDetails}
                <div className="detail-box">
                  <span className="photo-detail-title gear">
                    Gear
                  </span>
                  <div className="flex-row gear-row">
                    <div className="gear-icon-wrapper">
                      {cameraIcons.body}
                    </div>
                    <span className="gear-label">{photo.camera}</span>
                  </div>
                  <div className="flex-row gear-row">
                    <div className="gear-icon-wrapper">
                      {cameraIcons.lens}
                    </div>
                    <span className="gear-label">{photo.lens}</span>
                  </div>
                </div>
                <div className="detail-box">
                  <div className="flex-row">
                    <span className="category-detail-title">
                      Category:
                    </span>
                    <Link to={`/galleries/${photo.category}`}
                      className="category-link flex-row">
                      {photo.category.slice(0, 1).toUpperCase() +
                        photo.category.slice(1)}
                      <div className="right-arrow-wrapper">
                        <i className="fa-solid fa-angle-right" />
                      </div>
                    </Link>
                  </div>
                </div>

              </div>
              
            </> ) : ( <ProfileDetailsLoader /> )  }
        </div>
      </div>
    )
  }
}