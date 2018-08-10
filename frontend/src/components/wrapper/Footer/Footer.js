import React from "react"
import { Link } from "react-router-dom"

//import "./Footer.scss"

class Footer extends React.Component {
  render() {
    return (
      <footer className="group js-footer" id="footer" role="contentinfo">
        <div className="footer-wrapper">
          <div className="footer-meta">
            <div className="footer-meta-inner">
              <nav>
                <ul id="menu-footer" className="menu">
                  <li>
                    <a id="footer-contact-us" href="contact@example.email">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a id="footer-terms-and-conditions" target="_blank">
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <Link to="/">Footer link</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="version-info">v0.1</div>
        </div>
      </footer>
    )
  }
}

export default Footer
