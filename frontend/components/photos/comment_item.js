import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class CommentItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModalOptions: false
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  toggleModal(e) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({showModalOptions: !this.state.showModalOptions})
  }

  handleDelete(e) {
    const {deleteComment, comment} = this.props
    e.preventDefault()
    e.stopPropagation()
    this.setState({ showModalOptions: false })
    deleteComment(comment.id)
  }

  render() {
    const { comment, currentProfile, photo } = this.props;
    const { showModalOptions } = this.state;
    let commentModal, commentOptions;

    if (showModalOptions) {
      commentModal = (
        <div className='comment-modal-container'>
          <ul>
            <li className='modal-list-item comments flex-row gap-10'
              onClick={this.handleDelete}
            >
              <i className="fa-solid fa-trash"></i>
              <span>Delete comment</span>
            </li>
          </ul>
        </div>
      )
    }

    if (comment.profile_id == currentProfile.id) {
      commentOptions = (
        <div className='comment-options-icon'
          onClick={this.toggleModal}>
          <i className="fa-solid fa-ellipsis" />
        </div>
      )
    }
    
    return (
      <li className='comment-item'>
        {commentModal}
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
          <div className='flex-col comment-right'>
            <span className='comment-time'>
              {moment(comment.created_at).fromNow()}
            </span>
            {commentOptions}
          </div>
        </div>
      </li>
    )
  }
}