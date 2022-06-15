import React from 'react'
import CommentForm from './comment_form';
import CommentItem from './comment_item';
import commentIconLarge from '../../util/comment_icon_large';
import { sortCommentsByRecent } from '../../reducers/selectors';

const PhotoComments = ({ currentProfile, photo,
  createComment, deleteComment }) => {
  
  let commentsHeader, commentsIndex, orderedComments;

  orderedComments = sortCommentsByRecent(photo.comments)

  if (photo.comments.length === 0) {
    commentsHeader = (
      <span className='comments-header'>
        0 Comments 😞
      </span>
    )
    commentsIndex = (
      <div className='no-comments-placeholder'>
        <div className='comment-icon-placeholder-wrapper'>
          {commentIconLarge}
        </div>
        <span className='placeholder-copy'>No comments yet</span>
      </div>
    )
  } else {
    commentsHeader = (
      <span className='comments-header'>
        {photo.comments.length}&nbsp;
        {photo.comments.length > 1 ? 'Comments' : 'Comment'}
      </span>
    )
    commentsIndex = (
      <ul className='comment-index-content'>
        {orderedComments.map((comment, i) =>
          <CommentItem
            key={`comment-item-${i}`}
            comment={comment}
            photo={photo}
            currentProfile={currentProfile}
            deleteComment={deleteComment}
          />
        )}
      </ul>
    )
  }
  
  return (
    <div className='comments-wrapper'>
      <div className='comment-index-wrapper'>
        <CommentForm
          currentProfile={currentProfile}
          photo={photo}
          createComment={createComment}
          deleteComment={deleteComment}
        />
        {commentsHeader}
        {commentsIndex}
      </div>
    </div>
  )
}

export default PhotoComments;