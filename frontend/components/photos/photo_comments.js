import React from 'react'
import CommentForm from './comment_form';
import { Link } from 'react-router-dom';

const PhotoComments = ({ currentProfile, photo,
  createComment, deleteComment }) => {
  
  return (
    <div className='comments-wrapper'>
      <CommentForm
        currentProfile={currentProfile}
        photo={photo}
        createComment={createComment}
        deleteComment={deleteComment}
      />
      <div className='comment-index-wrapper'>
        <span className='comments-header'>
          {photo.comments.length}&nbsp;
          {photo.comments.length > 1 ? 'Comments' : 'Comment'}
        </span>
        <ul className='comment-index-content'>
          {photo.comments.map((comment, i) => 
            <li key={`comment-${i}`} className='comment-item'>
              <div className="comment-content">
                <div className='comment-avatar'>
                  <Link to={`/profiles/${comment.profile_id}`}>
                    <div className="avatar-wrapper-sm"
                      style={
                        { 'backgroundImage': `url(${comment.profile.avatar})` }}
                    />
                  </Link>
                </div>
                <div className="comment-main">
                  <div className='comment-profile-name'>
                    <Link to={`/profiles/${comment.profile_id}`}>
                      {comment.profile.name}
                    </Link>
                  </div>
                  <div className='comment-body'>
                    <p className='comment-body-content'>
                      {comment.body}
                    </p>
                  </div>
                </div>
              </div>


            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default PhotoComments;