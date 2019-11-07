import React, { useState } from "react"
import homeStyle from "./homePage.module.scss"
import Typist from "react-typist"
import "./Typist.scss"

import AnimatedText1 from "./animatedText1"
import WhoIAm from "./animatedText2"

const HomePage = () => {
  const [isTyped1, toggleTyped] = useState(false)
  const [isTyped2, toggleIt] = useState(false)

  const showCursor = () => {
    toggleTyped(!isTyped1)
  }

  const showWhoIAm = () => {
    toggleIt(!isTyped2)
  }

  return (
    <div className={homeStyle.homePage}>
      <div className={homeStyle.center}>
        <div className={homeStyle.isTyping}>
          {/* {!this.state.isHidden && <Child />} */}

          <AnimatedText1
            isTyped1={isTyped1}
            isTyped2={isTyped2}
            showCursor={showCursor}
            showWhoIAm={showWhoIAm}
          />
          {isTyped2 && <WhoIAm />}
        </div>
      </div>
    </div>
  )
}
export default HomePage
