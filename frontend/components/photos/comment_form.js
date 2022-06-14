import React from "react";

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photo_id: undefined,
      profile_id: undefined,
      body: ''
    }
  }

  handleSubmit(e) {
    const { createComment, currentProfile, photo } = this.props;
    e.preventDefault()
    e.stopPropagation()

  }

  render() {
    return (
      <div className="comment-form-wrapper">

      </div>
    )
  }
}