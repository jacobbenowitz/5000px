import React from 'react'

// Props needed //
// followee {} @profile obj
// allFollows [] 
// createFollow thunk
// removeFollow thunk
// currentProfile {} @profile obj

export default class FollowFollowersModalButton extends React.Component {
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
    const { followee, currentProfile } = this.props;
    this.setState({
      // isFollowing: followee.followers.map(follow => follow.followers.map(follow => follow.followee_id)).flat().includes(currentProfile.id),
      isFollowing: followee.followers.filter(follow =>
        follow.follower_id == currentProfile.id).length === 1,
      // isFollowing: Object.values(followee.followers).filter(follower =>
      //   follower.id !== currentProfile.id).length === 1,
      isCurrentProfile: currentProfile.id === followee.followerId
    })
  }

  handleFollow(e) {
    e.preventDefault()
    e.stopPropagation()
    const { followee, createFollow, currentProfile } = this.props;
    let follow = {
      follower_id: currentProfile.id,
      followee_id: followee.followerId
    }
    this.setState({
      isFollowing: true
    }, () => createFollow(follow))
  }

  handleUnfollow(e) {
    e.preventDefault()
    e.stopPropagation()
    const { allFollows, followee, removeFollow, currentProfile } = this.props;
    let followId;
    Object.values(allFollows).forEach(follow => {
      if (follow.followee_id === followee.followerId &&
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