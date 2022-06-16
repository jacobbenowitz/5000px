import React from 'react'
import { selectFollowsById } from '../../reducers/selectors';

// Props needed //
// followee {} @profile obj
// allFollows [] 
// createFollow thunk
// removeFollow thunk
// currentProfile {} @profile obj

export default class FollowFollowingModalButton extends React.Component {
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
    const { followee, currentProfile, allFollows } = this.props;
    let following = selectFollowsById(followee.followers, allFollows)
    this.setState({
      isFollowing: following.filter(follow =>
        follow.follower_id === currentProfile.id).length === 1,
      isCurrentProfile: currentProfile.id === followee.followeeId
    })
  }

  // componentDidUpdate() {
  //   const { followee, currentProfile, allFollows } = this.props;
    
  //   let following = selectFollowsById(followee.followers, allFollows)
  //   let isFollowing = following.filter(follow =>
  //     follow.follower_id === currentProfile.id).length === 1

  //   if (isFollowing !== this.state.isFollowing) {
  //     this.setState({
  //       isFollowing: isFollowing,
  //       isCurrentProfile: currentProfile.id === followee.followeeId
  //     })
  //   }
  // }

  handleFollow(e) {
    e.preventDefault()
    e.stopPropagation()
    const { followee, createFollow, currentProfile, fetchProfile } = this.props;
    let follow = {
      follower_id: currentProfile.id,
      followee_id: followee.followeeId
    }
    this.setState({
      isFollowing: true
    }, () => createFollow(follow))
  }

  handleUnfollow(e) {
    e.preventDefault()
    e.stopPropagation()
    const { allFollows, followee, removeFollow,
      currentProfile, fetchProfile } = this.props;
    let followId;
    Object.values(allFollows).forEach(follow => {
      if (follow.followee_id === followee.followeeId &&
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