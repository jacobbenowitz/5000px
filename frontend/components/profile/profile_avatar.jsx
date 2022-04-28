import React from "react";

export default class ProfileAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  // TEST: Removed bc url should be in db now, no need to fetch by id
  componentDidMount() {
    if (this.props.profileId) {
      this.props.fetchProfile(this.props.profileId)
    }
  }

  render() {
    // debugger

    return (
      <img src = {this.props.avatar }/>
    )
  }
}
