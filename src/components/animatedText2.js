import React from "react"
import homeStyle from "./homePage.module.scss"
import HomeNav from "./animatedText3"

const WhoIAm = () => {
  return (
    <div className={homeStyle.whoIAm}>
      <div className={homeStyle.face}></div>
      <div className={homeStyle.navContainer}>
        <span className={homeStyle.welcome}>Hello, I'm Michael,</span>
        <br />
        <span className={homeStyle.welcome}>Front-end developer.</span>

        <HomeNav />
      </div>
    </div>
  )
}

export default WhoIAm
