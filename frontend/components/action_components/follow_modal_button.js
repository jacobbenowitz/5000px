import React from 'react'

export default class FollowModalButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFollowing: false,
      isCurrentProfile: false,
    }
    this.handleFollow = this.handleFollow.bind(this)
    this.handleUnfollow = this.handleUnfollow.bind(this)
  }

  componentDidMount() {
    const { followers, currentProfile, likerId } = this.props
    this.setState({
      isFollowing: followers.filter(follow =>
        follow.follower_id == currentProfile.id).length === 1,
      isCurrentProfile: currentProfile.id == likerId
    })
  }

  handleFollow(e) {
    e.preventDefault()
    e.stopPropagation()
    const { likerId, createFollow, currentProfile } = this.props;
    let follow = {
      follower_id: currentProfile.id,
      followee_id: likerId
    }
    this.setState({
      isFollowing: true
    }, () => createFollow(follow))
  }

  handleUnfollow(e) {
    e.preventDefault()
    e.stopPropagation()
    const { allFollows, likerId, removeFollow, currentProfile } = this.props;
    let followId;
    Object.values(allFollows).forEach(follow => {
      if (follow.followee_id === likerId &&
        follow.follower_id === currentProfile.id) {
        followId = follow.id
      }
    })

    this.setState({
      isFollowing: false
    }, () => removeFollow(followId))
  }

  render() {
    const { isFollowing, isCurrentProfile } = this.state;

    let followButton;

    if (isCurrentProfile) {
      followButton = null
    } else if (isFollowing) {
      followButton = (
        <button className="unfollow-button"
          onClick={this.handleUnfollow}
        >Unfollow</button>
      )
    } else {
      followButton = (
        <button className="follow-liker-button"
          onClick={this.handleFollow}
        >Follow</button>
      )
    }
    return (
      <>
        {followButton}
      </>
    )
  }
}