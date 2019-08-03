import React from 'react'
import Link from 'gatsby-link'
import { Home, Mail, Activity, Monitor } from 'react-feather'

const Header = () => (
  <div className="nav-wrapper">
    <div className="nav-image" />
    <ul className="nav-links">
      <li>
        <Link to="/" className="nav-link">
          <Home />
        </Link>
        Home
      </li>
      <li>
        <Link to="/projects" className="nav-link">
          <Activity />
        </Link>
        Projects
      </li>
      <li>
        <Link to="/stack" className="nav-link">
          <Monitor />
        </Link>
        Tech Stack
      </li>
      <li>
        <Link to="/contact" className="nav-link">
          <Mail />
        </Link>
        Contact
      </li>
    </ul>
  </div>
)

export default Header
