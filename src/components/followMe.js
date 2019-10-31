import React from "react"
import logoStyles from "./followMe.module.scss"

const FollowMe = () => {
  return (
    <div>
      <ul className={logoStyles.logos}>
        <li>
          <a href="" target="_blank">
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <span
              className={`${logoStyles.icon} ${logoStyles.linkedinLogo}`}
            ></span>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <span
              className={`${logoStyles.icon} ${logoStyles.githubLogo}`}
            ></span>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <span
              className={`${logoStyles.icon} ${logoStyles.githubLogo}`}
            ></span>
          </a>
        </li>
      </ul>
    </div>
  )
}
export default FollowMe
