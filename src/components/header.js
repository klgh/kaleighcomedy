import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="navbar-brand">
      <Link to="/">{siteTitle}</Link>
    </div>
    <div className=" navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <div className="nav-item nav-link">
          <Link to="/upcoming">Upcoming</Link>
        </div>
        <div className="nav-item nav-link">
          <Link to="/media">Media</Link>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
