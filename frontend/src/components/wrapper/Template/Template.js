import React from "react"
import PropTypes from "prop-types"

// import CookieMessage from "../GovUkCookieMessage/GovUkCookieMessage.jsx"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

//import "./Template.scss"

class Template extends React.Component {
  render() {
    return (
      <div className="Template">
        {/* <CookieMessage /> */}
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.node
}

export default Template
