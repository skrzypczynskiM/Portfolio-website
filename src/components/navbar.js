import React from "react"
import { Link } from "gatsby"

import navbarStyles from "./navbar.module.scss"

const NavBar = () => {
  return (
    <nav className={navbarStyles.navList}>
      <li>
        <Link to="/home/">
          <i className={navbarStyles.michlIcon}></i>
        </Link>
      </li>
      <li>
        <Link
          className={navbarStyles.navItem}
          activeClassName={navbarStyles.activeNavItem}
          to="/home/"
          data-nav-text="home"
        >
          <i className={`${navbarStyles.icon} ${navbarStyles.homeIcon}`}></i>
        </Link>
      </li>
      <li>
        <Link
          className={navbarStyles.navItem}
          activeClassName={navbarStyles.activeNavItem}
          to="/about/"
          data-nav-text="about"
        >
          <i className={`${navbarStyles.icon} ${navbarStyles.aboutIcon}`}></i>
        </Link>
      </li>
      <li>
        <Link
          className={navbarStyles.navItem}
          activeClassName={navbarStyles.activeNavItem}
          to="/skills/"
          data-nav-text="skills"
        >
          <i className={`${navbarStyles.icon} ${navbarStyles.skillsIcon}`}></i>
        </Link>
      </li>
      <li>
        <Link
          className={navbarStyles.navItem}
          activeClassName={navbarStyles.activeNavItem}
          to="/my-work/"
          data-nav-text="my work"
        >
          <i className={`${navbarStyles.icon} ${navbarStyles.myWorkIcon}`}></i>
        </Link>
      </li>
      <li>
        <Link
          className={navbarStyles.navItem}
          activeClassName={navbarStyles.activeNavItem}
          to="/contact/"
          data-nav-text="contact"
        >
          <i className={`${navbarStyles.icon} ${navbarStyles.contactIcon}`}></i>
        </Link>
      </li>
    </nav>
  )
}

export default NavBar
