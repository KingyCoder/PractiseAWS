import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
//import SignIn from "../SignIn/SignIn.jsx"
// import logo from "../../static/images/gov.uk_logotype_crown_invert_trans.png"

//import "./GovUkHeader.scss"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMenu: false
    }
  }

  toggleMenu() {
    this.setState({
      displayMenu: !this.state.displayMenu
    })
  }

  render() {
    return (
      <header role="banner" id="global-header" className="Header">
        <div className="header-wrapper">
          {/* <SignIn
              inline={!this.props.navigation}
              display={this.state.displayMenu}
              userData={this.props.userData}
            /> */}

          <div
            className={
              this.state.displayMenu
                ? "header-proposition header-padding-bottom-45"
                : "header-proposition"
            }
          >
            <div className="header-link-container">
              <Link className="header-link" to={`/`}>
                Title
              </Link>
              <span
                className={
                  this.state.displayMenu
                    ? "header-menu-link up"
                    : "header-menu-link down"
                }
                onClick={this.toggleMenu.bind(this)}
              >
                Menu
              </span>
            </div>
            <nav
              id="proposition-menu"
              className={
                this.props.display ? "pcf-nav" : "pcf-nav display-none"
              }
            >
              <ul
                id="proposition-links"
                className={this.props.display ? "show-mobile-menu-links" : ""}
              >
                <li>
                  <Link to="/">Link1</Link>
                </li>
                <li>
                  <Link to="/Home">Link2</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
