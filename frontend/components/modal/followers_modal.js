import React from 'react'
import { Link } from 'react-router-dom'
import { selectFollowsById } from '../../reducers/selectors';
import FollowFollowersModalButton from '../action_components/follow_followers_modal_button';

const FollowersModal = ({ showFollowsModal, toggleFollowsModal, followee, currentProfile, createFollow, removeFollow, allFollows }) => {

  let followers = selectFollowsById(followee.followers, allFollows) 
  let followersModal;
  
  if (showFollowsModal) {
    followersModal = (
      <div className="modal-wrapper">
        <div className="likes-modal">
          <div className="modal-header">
            <div className="icon-close-button" onClick={toggleFollowsModal}>
              <i className="fa-solid fa-xmark fa-xl modal-close" />
            </div>
            <span className="modal-header-copy">
              {followee.followers.length}&nbsp;
              {followee.followers.length > 1 ? 'Followers' : 'Followers'}
            </span>
          </div>
          <ul className="likers-list">
            {followers.map((follow, i) =>
              <li key={`liker-${i}`} className='liker-modal-list-item'>
                <div className="profile-summary-wrapper">
                  <Link to={`/profiles/${follow.follower_id}`}>
                    <div className="avatar-wrapper-sm"
                      style={{ 'backgroundImage': `url(${follow.follower.avatar})` }
                      }
                    />
                  </Link>
                  <div className="liker-profile-summary">
                    <Link to={`/profiles/${follow.follower_id}`}>
                      {follow.follower.first_name}&nbsp;{follow.follower.last_name}
                    </Link>
                    <span className="liker-followers-count">
                      {follow.follower.followers.length}&nbsp;Followers
                    </span>
                  </div>
                </div>
                <FollowFollowersModalButton
                  followee={follow.follower}
                  allFollows={allFollows}
                  createFollow={createFollow}
                  removeFollow={removeFollow}
                  currentProfile={currentProfile}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
  return (
    <div className={showFollowsModal ? "modal-mask modal-on" : "modal-off"}>
      {followersModal}
    </div>
  )
}

export default FollowersModal;