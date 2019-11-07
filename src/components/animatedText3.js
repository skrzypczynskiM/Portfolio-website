import React from "react"
import { Link } from "gatsby"

import homeStyle from "./homePage.module.scss"

const homeNav = () => {
  return (
    <div className={homeStyle.homeNav}>
      <ul>
        <li>
          Don't forget to{" "}
          <Link to="/contact/" className={homeStyle.link}>
            <span className={`${homeStyle.hover} ${homeStyle.hover_2}`}>
              contact me.
            </span>
          </Link>
        </li>
        <li>
          Do some research{" "}
          <Link to="/about/" className={homeStyle.link}>
            <span className={`${homeStyle.hover} ${homeStyle.hover_2}`}>
              about me.
            </span>
          </Link>
        </li>

        <li>
          Feel free to take a look at my latest projects <br /> on
          <Link to="/my-work/" className={homeStyle.link}>
            <span className={`${homeStyle.hover} ${homeStyle.hover_2}`}>
              {" "}
              the web portfolio page.
            </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default homeNav
