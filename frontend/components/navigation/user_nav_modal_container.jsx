import { connect } from "react-redux"
import NavModal from "./nav_modal"

const mapStateToProps = state => ({
  userLinks = [
    { title: 'Profile', url: '/profile' },
    { title: 'Galleries', url: '/galleries' },
    { title: 'Liked photos', url: '/likes' },
    { title: 'Settings', url: '/profiles/settings' },
    { title: 'Logout', url: '/' }
  ]
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavModal);