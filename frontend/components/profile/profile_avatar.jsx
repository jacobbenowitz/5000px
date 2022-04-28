import React from "react";

export default class ProfileAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  // TEST: Removed bc url should be in db now, no need to fetch by id
  componentDidMount() {
    this.props.fetchProfile(this.props.profileId)
  }

  render() {
    // debugger
    if (this.props.avatar) {
      return (
        <img src = {this.props.avatar }/>
      )
    }
  }
}
