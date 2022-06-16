import React from 'react'
import { Link } from 'react-router-dom'
import FollowModalButton from "../action_components/follow_modal_button";

const LikesModal = ({ openLikeModal, toggleLikeModal, photo, currentProfile,
  createFollow, removeFollow, allFollows }) => {
  let likesModal;
  
  if (openLikeModal) {
    likesModal = (
      <div className="modal-wrapper">
        <div className="likes-modal">
          <div className="modal-header">
            <div className="icon-close-button" onClick={toggleLikeModal}>
              <i className="fa-solid fa-xmark fa-xl modal-close" />
            </div>
            <span className="modal-header-copy">
              {photo.likes.length}&nbsp;
              {photo.likes.length > 1 ? 'Likes' : 'Like'}
            </span>
          </div>
          <ul className="likers-list">
            {photo.likes.map((like, i) =>
              <li key={`liker-${i}`} className='liker-modal-list-item'>
                <div className="profile-summary-wrapper">
                  <Link to={`/profiles/${like.liker_id}`}>
                    <div className="avatar-wrapper-sm"
                      style={{ 'backgroundImage': `url(${like.avatar})` }
                      }
                    />
                  </Link>
                  <div className="liker-profile-summary">
                    <Link to={`/profiles/${like.liker_id}`}>
                      {like.first_name}&nbsp;{like.last_name}
                    </Link>
                    <span className="liker-followers-count">
                      {like.followers.length}&nbsp;Followers
                    </span>
                  </div>
                </div>
                <FollowModalButton
                  likerId={like.liker_id}
                  followers={like.followers}
                  currentProfile={currentProfile}
                  createFollow={createFollow}
                  removeFollow={removeFollow}
                  allFollows={allFollows}
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
      <div className={openLikeModal ?
        'modal-mask modal-on' : 'modal-off'}>
        {likesModal}
      </div>
      <div className={openLikeModal ?
        'modal-close-container' : 'mask-off'}
        onClick={toggleLikeModal} 
        
        />
    </>
  )
}

export default LikesModal;