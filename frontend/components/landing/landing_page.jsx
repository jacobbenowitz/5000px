import React from "react";
import Hero from "./hero";
import DemoInfo from "./demo_info";
import SimpleCTA from "./simple_cta_section";
import EditorsChoiceContainer from "./editors_choice_container";

const LandingPage = props => {
  return (
    <div id="landing-page">
      <Hero />
      <DemoInfo />
      <EditorsChoiceContainer />
      <SimpleCTA key={'cta-landing'} props={props} />
    </div>
  )
}

export default LandingPage;