import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="navbar-brand">
      <Link to="/">{siteTitle}</Link>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <div class="nav-item nav-link">
          <Link to="/about">About</Link>
        </div>
        <div class="nav-item nav-link">
          <Link to="/upcoming">Upcoming</Link>
        </div>
        <div class="nav-item nav-link">
          <Link to="/media">Media</Link>
        </div>
        <div class="nav-item nav-link">
          <Link to="/contact">Contact</Link>
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
