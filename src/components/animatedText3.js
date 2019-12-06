import React from "react"
import { Link } from "gatsby"

import homeStyle from "./homePage.module.scss"

const homeNav = () => {
  return (
    <div className={homeStyle.homeNav}>
      <ul>
        <li>
          Do some research{" "}
          <Link to="/about/" className={homeStyle.link}>
            <span className={`${homeStyle.hover} ${homeStyle.hover_2}`}>
              about me.
            </span>
          </Link>
        </li>

        <li>
          Check out my current
          <Link to="/skills/" className={homeStyle.link}>
            <span className={`${homeStyle.hover} ${homeStyle.hover_2}`}>
              {" "}
              list of skills.
            </span>
          </Link>
        </li>

        <li>
          Feel free to take a look at my latest projects <br />
          <Link to="/portfolio/" className={homeStyle.link}>
            <span className={`${homeStyle.hover} ${homeStyle.hover_2}`}>
              {" "}
              on the web portfolio page.
            </span>
          </Link>
        </li>
        <li>
          Got you interested?{" "}
          <Link to="/contact/" className={homeStyle.link}>
            <span className={`${homeStyle.hover} ${homeStyle.hover_2}`}>
              Contact me.
            </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default homeNav
