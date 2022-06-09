import React from 'react' 

const InfoCallout = ({infoCallout, closeInfoCallout}) => (
  <div className={infoCallout ?
    "home-callout-container" : "home-callout-container close"}>
    <div className="home-callout">
      <div className="close-wrapper"
        onClick={closeInfoCallout}
      >
        <i className="fa-solid fa-xmark fa-lg" />
      </div>
      <div className="content-wrapper flex-col">
        <div className="flex-col gap-10 call-text">
          <h3>Welcome to 5000px</h3>
          <div className="spacer-2rem;h"></div>
          <span className="callout-sub">This is a fullstack clone of&nbsp;
            <a href="https://500px.com/" className="callout-sub"
              target="_blank" rel="noreferrer"
            >500px</a>, a popular photo sharing site for photographers around the world.</span>
          <span>Developed by Jacob Benowitz</span>
        </div>
        <div className="flex-row callout-buttons">
          <a href="https://jacobbenowitz.com"
            target="_blank" rel="noreferrer"
            className="icon-button"
          >
            <i className="fa-solid fa-link fa-lg" />
            Portfolio
          </a>
          <a href="https://github.com/jacobbenowitz/"
            target="_blank" rel="noreferrer"
            className="icon-button"
          >
            <i className="fa-brands fa-github fa-lg" />
            GitHub
          </a>
          <a href="https://angel.co/u/jacob-benowitz"
            target="_blank" rel="noreferrer"
            className="icon-button"
          >
            <i className="fa-brands fa-angellist fa-lg" />
            AngelList
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default InfoCallout