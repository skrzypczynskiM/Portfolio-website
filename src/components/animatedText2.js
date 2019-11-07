import React from "react"
import homeStyle from "./homePage.module.scss"
import HomeNav from "./animatedText3"

const WhoIAm = () => {
  return (
    <div className={homeStyle.whoIAm}>
      <div className={homeStyle.face}></div>
      <span className={homeStyle.welcome}>Hello, I'm Michael,</span>
      <span className={homeStyle.welcome}>Front-end developer.</span>

      <HomeNav />
    </div>
  )
}

export default WhoIAm
