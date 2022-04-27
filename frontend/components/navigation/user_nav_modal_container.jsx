import { connect } from "react-redux";
import UserNavModal from "./user_nav_modal";
import {logout} from "../../actions/session/session_actions"

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserNavModal);