import React from 'react'
import { Link } from 'react-router-dom'
import { selectFollowsById } from '../../reducers/selectors';
import FollowFollowingModalButton from '../action_components/follow_following_modal_button';

const FollowingModal = ({ showFollowingModal, toggleFollowingModal, followee, currentProfile, createFollow, removeFollow, allFollows, fetchProfile }) => {

  const placehodlerSrc = "https://my5000px-static.s3.amazonaws.com/person-placeholder-300x300.jpg"

  let following = selectFollowsById(followee.following, allFollows)
  
  return (
    <>
      <div className={showFollowingModal ?
        "modal-mask modal-on" : "modal-off"}>
        <div className="modal-wrapper">
          <div className="likes-modal" onClick={toggleFollowingModal}>
            <div className="modal-header">
              <div className="icon-close-button"
                onClick={toggleFollowingModal}
              >
                <i className="fa-solid fa-xmark fa-xl modal-close" />
              </div>
              <span className="modal-header-copy">
                {followee.following.length}&nbsp;Following
              </span>
            </div>
            <ul className="likers-list">
              {following.map((follow, i) =>
                <li key={`liker-${i}`} className='liker-modal-list-item'>
                  <div className="profile-summary-wrapper">
                    <Link to={`/profiles/${follow?.followee_id}`}>
                      <div className="avatar-wrapper-sm"
                        style={
                          { 'backgroundImage': `url(${follow.followee.avatar || placehodlerSrc})` }
                        }
                      />
                    </Link>
                    <div className="liker-profile-summary">
                      <Link to={`/profiles/${follow?.followee_id}`}>
                        {follow.followee.first_name.length ? (
                          follow.followee.first_name + " " + follow.followee.last_name) : follow.followee.username}
                      </Link>
                      <span className="liker-followers-count">
                        {follow?.followee.followers.length}&nbsp;Followers
                      </span>
                    </div>
                  </div>
                  <FollowFollowingModalButton
                    followee={follow.followee}
                    allFollows={allFollows}
                    createFollow={createFollow}
                    removeFollow={removeFollow}
                    currentProfile={currentProfile}
                    fetchProfile={fetchProfile}
                    visable={showFollowingModal}
                  />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className={showFollowingModal ?
        'modal-close-container' : 'mask-off'}
        onClick={toggleFollowingModal} />
    </>
  )
}

export default FollowingModal;