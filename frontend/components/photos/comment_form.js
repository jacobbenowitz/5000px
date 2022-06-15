import React from "react";
import TextareaAutosize from 'react-textarea-autosize';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      body: ''
    }
    this.bindHandlers()
  }
  
  bindHandlers() {
    this.updateBody = this.updateBody.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const { createComment, currentProfile, photo } = this.props;
    e.preventDefault()
    e.stopPropagation()

    let comment = {
      photo_id: photo.id,
      profile_id: currentProfile.id,
      body: this.state.body
    }
    this.setState({
      body: '',
      showForm: false
    })
    createComment(comment)
  }

  toggleForm(e) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({showForm: !this.state.showForm})
  }

  updateBody(e) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({body: e.target.value})
  }

  handleFocus(e) {
    e.preventDefault()
    e.stopPropagation()
    const { showForm } = this.state;
    if (!showForm) {
      this.setState({
        showForm: !this.state.showForm
      })
    }
  }

  render() {
    const { currentProfile } = this.props;
    const { body, showForm } = this.state;
    let commentButtons;
    
    if (showForm) {
      commentButtons = (
        <div className={"comment-form-buttons"}>
          <span className="cancel" onClick={this.toggleForm}
          >Cancel</span>
          <button className={body.length > 2 ? "post-comment" : "post-comment disabled"}
          >Post</button>
        </div>
      )
    }
    return (
      <div className="comment-form-wrapper">
        <div className="comment-form-avatar">
          <div className="avatar-wrapper-comment"
            style={{ 'backgroundImage': `url(${currentProfile.avatar})` }}
          />
        </div>
        <div className="comment-form-main">
          <form className="comment-form" onSubmit={this.handleSubmit}>
            <div className="comment-input-wrapper">
              <TextareaAutosize
                maxRows={10}
                className={'comment-input'}
                value={body}
                onChange={this.updateBody}
                onFocus={this.handleFocus}
              />
            </div>
            {commentButtons}
          </form>
        </div>
      </div>
    )
  }
}