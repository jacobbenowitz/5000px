import { connect } from "react-redux"
import DiscoverNavModal from "./discover_nav_modal"


const mapStateToProps = state => (
  discoverLinks = [
    { title: 'Popular photos', url: '/popular' },
    { title: 'Upcoming photos', url: '/upcoming' },
    { title: 'Fresh photos', url: '/fresh' },
    { title: 'Editors Choice', url: '/editors-choice' }
  ]
)

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps, null)(DiscoverNavModal);