import React from 'react'
import { Link } from 'react-router-dom'
import { selectFollowsById } from '../../reducers/selectors';
import FollowFollowingModalButton from '../action_components/follow_following_modal_button';

const FollowingModal = ({ showFollowingModal, toggleFollowingModal, followee, currentProfile, createFollow, removeFollow, allFollows, fetchProfile }) => {
  let following = selectFollowsById(followee.following, allFollows)
  let followingModal;
  
  if (showFollowingModal) {
    followingModal = (
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
                      style={{ 'backgroundImage': `url(${follow.followee.avatar})` }
                      }
                    />
                  </Link>
                  <div className="liker-profile-summary">
                    <Link to={`/profiles/${follow?.followee_id}`}>
                      {follow.followee.first_name}&nbsp;{follow.followee.last_name}
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
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className={showFollowingModal ?
        "modal-mask modal-on" : "modal-off"}>
        {followingModal}
      </div>
      <div className={showFollowingModal ?
        'modal-close-container' : 'mask-off'}
        onClick={toggleFollowingModal} />
    </>
  )
}

export default FollowingModal;