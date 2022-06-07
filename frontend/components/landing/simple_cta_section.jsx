import React from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import {sleep} from "../../util/sleep_util"

class SimpleCTA extends React.Component {
  constructor(props) {
    super(props);
    this.demoSignUp = this.demoSignUp.bind(this)
  }

  signUp() {
    const demoButton = document.getElementById('demo-signup');
    demoButton.click();
  }

  async demoSignUp() {
    this.props.history.push('/signup');
    await sleep(1000)
    this.signUp()
  }

  render() {
    return (
      <div className="simple-cta-section">
        <div className="simple-section-copy">
          <h2>Ready to explore the site?</h2>
          <p>If you're short on time click the 'Demo Sign up' button below. Otherwise, click the 'Sign up' button to build your own profile!</p>
        </div>
        <div className="simple-section-buttons">
          <div className="buttons-center">
            <Link to={'/signup'} className="sign-up-large">Sign up</Link>
            <button className="demo-sign-up-large"
              onClick={() => this.demoSignUp()}
            >Demo Sign up</button>
          </div>
        </div>
      </div>
    )
  }
} 

export default withRouter(SimpleCTA);