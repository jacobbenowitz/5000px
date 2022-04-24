import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "./hero";
import { DemoInfo } from "./demo_info";
import { EditorsChoiceLanding } from "./editors_choice";

const LandingPage = props => {

  return (
    <div id="landing-page">
      { Hero }
      { DemoInfo }
      { EditorsChoiceLanding }
    </div>

  )
}

export default LandingPage;