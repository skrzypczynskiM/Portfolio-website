import React from "react"
import boxStyles from "./rotatingBox.module.scss"

const Box = () => {
  return (
    <div className={boxStyles.wrap}>
      <div className={boxStyles.cube}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
export default Box
