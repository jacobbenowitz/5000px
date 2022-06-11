import React from "react";

const DemoInfo = props => (
  <div id="landing-info">
    <div id="demo-title">
      <h3>The home of ideation</h3>
    </div>
    
    <div id="demo-info">
      <div id="info-1" className="info-box">
        <div className="icon-container">
          <img src="https://my5000px-static.s3.amazonaws.com/landing_page_icons/grow.svg" />
        </div>
        <div className="info-box-text">
          <div className="info-sub-header">
            <h4>Grow as a photographer</h4>
          </div>
          <div className="info-desc-box">
            <p>Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.</p>
          </div>
        </div>
      </div>

      <div id="info-2" className="info-box">
        <div className="icon-container">
          <img src="https://my5000px-static.s3.amazonaws.com/landing_page_icons/career.svg" />
        </div>
        <div className="info-box-text">
          <div className="info-sub-header">
            <h4>Build your career</h4>
          </div>
          <div className="info-desc-box">
            <p>Market yourself as a professional photographer. Show that you’re available for hire on your Profile and get discovered.</p>
          </div>
        </div>
      </div>

      <div id="info-3" className="info-box">
        <div className="icon-container">
          <img src="https://my5000px-static.s3.amazonaws.com/landing_page_icons/performance.svg" />
        </div>
        <div className="info-box-text">
          <div className="info-sub-header">
            <h4>See how you're performing</h4>
          </div>
          <div className="info-desc-box">
            <p>With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank in comparison to other photographers in the community.</p>
          </div>
        </div>
      </div>

      <div id="info-4" className="info-box">
        <div className="icon-container">
          <img src="https://my5000px-static.s3.amazonaws.com/landing_page_icons/money.svg"></img>
        </div>
        <div className="info-box-text">
          <div className="info-sub-header">
            <h4>Sell your work</h4>
          </div>
          <div className="info-desc-box">
            <p>Earn one of the highest royalty rates in the industry when you distribute your photography through 500px to a global marketplace, where buyers can view and purchase your work for commercial usage.</p>
          </div>
        </div>
      </div>

    </div>
    
  </div>
)
export default DemoInfo