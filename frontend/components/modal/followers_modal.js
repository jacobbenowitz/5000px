import React from 'react'
import { Link } from 'react-router-dom'
import { selectFollowsById } from '../../reducers/selectors';
import FollowFollowersModalButton from '../action_components/follow_followers_modal_button';

const FollowersModal = ({ showFollowsModal, toggleFollowsModal, followee, currentProfile, createFollow, removeFollow, allFollows }) => {

  const placehodlerSrc = "https://my5000px-static.s3.amazonaws.com/person-placeholder-300x300.jpg"

  let followers = selectFollowsById(followee.followers, allFollows) 
  
  return (
    <>
      <div onClick={toggleFollowsModal}
        className={showFollowsModal ? "modal-mask modal-on" : "modal-off"}>
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
                        style={{ 'backgroundImage': `url(${follow.follower.avatar || placehodlerSrc})` }
                        }
                      />
                    </Link>
                    <div className="liker-profile-summary">
                      <Link to={`/profiles/${follow.follower_id}`}>
                        {follow.follower.first_name.length ? (
                          follow.follower.first_name + " " + follow.follower.last_name
                        ) : follow.follower.username}
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
                    visable={showFollowsModal}
                  />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className={showFollowsModal ?
        'modal-close-container' : 'mask-off'}
        onClick={toggleFollowsModal} 
        
        />
    </>
  )
}

export default FollowersModal;