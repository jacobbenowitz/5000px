import React from 'react'
import { selectFollowsById } from '../../reducers/selectors'

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
      isCurrentProfile: false
    }
    this.handleFollow = this.handleFollow.bind(this)
    this.handleUnfollow = this.handleUnfollow.bind(this)
  }

  componentDidMount() {
    const { followee, currentProfile, allFollows } = this.props;
    const followers = selectFollowsById(followee.followers, allFollows)
    this.setState({
      isFollowing: followers.filter(follow =>
        follow.follower_id === currentProfile.id).length === 1,
      isCurrentProfile: currentProfile.id === followee.followerId
    })
  }

  componentDidUpdate() {
    const { followee, currentProfile } = this.props;

    const isCurrentProfile = currentProfile.id === followee.followerId

    if (isCurrentProfile !== this.state.isCurrentProfile) {
      this.setState({
        isCurrentProfile: isCurrentProfile
      })
    }
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
    const { allFollows, followee, removeFollow, currentProfile, visable } = this.props;
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
    const { visable } = this.props;
    let followButton;

    if (isCurrentProfile) {
      followButton = null
    } else if (isFollowing && visable) {
      followButton = (
        <button className="unfollow-button"
          onClick={this.handleUnfollow}
        >Unfollow</button>
      )
    } else if (visable) {
      followButton = (
        <button className="follow-liker-button"
          onClick={this.handleFollow}
        >Follow</button>
      )
    } else {
      followButton = null
    }
    return (
      <>
        {followButton}
      </>
    )
  }
}