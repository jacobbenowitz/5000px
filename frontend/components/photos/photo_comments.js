import React from 'react'
import CommentForm from './comment_form';
import { Link } from 'react-router-dom';
import moment from 'moment';
import CommentItem from './comment_item';

const PhotoComments = ({ currentProfile, photo,
  createComment, deleteComment }) => {
  
  return (
    <div className='comments-wrapper'>
      <div className='comment-index-wrapper'>
        <CommentForm
          currentProfile={currentProfile}
          photo={photo}
          createComment={createComment}
          deleteComment={deleteComment}
        />
        <span className='comments-header'>
          {photo.comments.length}&nbsp;
          {photo.comments.length > 1 ? 'Comments' : 'Comment'}
        </span>
        <ul className='comment-index-content'>
          {photo.comments.map((comment, i) => 
            <CommentItem
              key={`comment-item-${i}`}
              comment={comment}
              photo={photo}
              currentProfile={currentProfile}
              deleteComment={deleteComment}
            />
          )}
        </ul>
      </div>
    </div>
  )
}

export default PhotoComments;