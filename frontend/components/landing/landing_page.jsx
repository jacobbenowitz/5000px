import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "./hero";
import { DemoInfo } from "./demo_info";
import { EditorsChoiceLanding } from "./editors_choice";
import SimpleCTA from "./simple_cta_section";

const LandingPage = props => {
  return (
    <div id="landing-page">
      { Hero }
      { DemoInfo }
      { EditorsChoiceLanding }
      <SimpleCTA key={'cta-landing'} props={props} />
    </div>

  )
}

export default LandingPage;