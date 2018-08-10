import React from "react"
import PropTypes from "prop-types"

//import "./FeedbackBanner.scss"

class Banner extends React.Component {
  render() {
    return (
      <div className="FeedbackBanner phase-banner">
        <p>
          <strong>This is a feedback message!</strong>
        </p>
      </div>
    )
  }
}

Banner.propTypes = {}

Banner.defaultProps = {}

export default Banner
