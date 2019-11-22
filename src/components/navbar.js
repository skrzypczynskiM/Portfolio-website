import React from "react"
import { Link } from "gatsby"

import navbarStyles from "./navbar.module.scss"

const NavBar = () => {
  return (
    <nav className={navbarStyles.navList}>
      {/* <nav className={`${navbarStyles.navList} ${navbarStyles.fixedForDesktop}`}></nav> */}
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
          to="/portfolio/"
          partiallyActive={true}
          data-nav-text="my work"
        >
          <i className={`${navbarStyles.icon} ${navbarStyles.myWorkIcon}`}></i>
        </Link>
      </li>
      <li className={navbarStyles.contact}>
        <Link
          className={navbarStyles.navItem}
          activeClassName={navbarStyles.activeNavItem}
          to="/contact/"
          data-nav-text="contact"
        >
          <i className={`${navbarStyles.icon} ${navbarStyles.contactIcon}`}></i>
        </Link>
      </li>
      {/* <div className={navbarStyles.socialIcons}> */}
      <li className={`${navbarStyles.firstSocial} ${navbarStyles.showDesktop}`}>
        <a
          className={navbarStyles.navItem}
          href="https://github.com/justFlow5/gatsby-portfolio"
          data-nav-text=""
        >
          <i className={`${navbarStyles.icon} ${navbarStyles.githubIcon}`}></i>
        </a>
      </li>
      <li className={navbarStyles.showDesktop}>
        <a className={navbarStyles.navItem} href="" data-nav-text="">
          <i className={`${navbarStyles.icon} ${navbarStyles.googleIcon}`}></i>
        </a>
      </li>
      <li className={navbarStyles.showDesktop}>
        <a className={navbarStyles.navItem} href="" data-nav-text="">
          <i
            className={`${navbarStyles.icon} ${navbarStyles.linkedInIcon}`}
          ></i>
        </a>
      </li>
      {/* </div> */}
    </nav>
  )
}

export default NavBar
