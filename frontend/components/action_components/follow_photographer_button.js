import React from 'react'
import { selectFollowsById } from '../../reducers/selectors'

export default class FollowPhotographerButton extends React.Component {
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
    const followers = selectFollowsById(followee.followers, allFollows)
    this.setState({
      isFollowing: followers.filter(follow =>
        follow.follower_id === currentProfile.id).length === 1,
      isCurrentProfile: currentProfile.id === followee.followeeId
    })
  }

  // componentDidUpdate() {
  //   const { followee, currentProfile, allFollows } = this.props;
  //   const followers = selectFollowsById(followee.followers, allFollows)
  //   const isFollowing = followers.filter(follow =>
  //     follow.follower_id === currentProfile.id).length === 1
  //   if (isFollowing !== this.state.isFollowing) { 
  //     this.setState({
  //       isFollowing: isFollowing,
  //     })
  //   }
  // }

  handleFollow(e) {
    e.preventDefault()
    e.stopPropagation()
    const { followee, createFollow, currentProfile } = this.props;
    let follow = {
      follower_id: currentProfile.id,
      followee_id: followee.id
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
      if (follow.followee_id === followee.id &&
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