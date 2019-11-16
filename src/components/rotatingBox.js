import React from "react"
import boxStyles from "./rotatingBox.module.scss"

const Box = () => {
  return (
    // <div className={boxStyles.rotatingBox}>
    //   <div className={boxStyles.singleRB}>
    //     <div className={boxStyles.frontSide}>
    //       <img src='' alt='' />
    //     </div>
    //     <div className={boxStyles.backSide}>
    //       {" "}
    //       <img src='' alt='' />
    //     </div>
    //     <div className={boxStyles.leftSide}>
    //       {" "}
    //       <img src='' alt='' />
    //     </div>
    //     <div className={boxStyles.rightSide}>
    //       {" "}
    //       <img src='' alt='' />
    //     </div>
    //     <div className={boxStyles.topSide}>
    //       {" "}
    //       <img src='' alt='' />
    //     </div>
    //     <div className={boxStyles.bottomSide}>
    //       {" "}
    //       <img src='' alt='' />
    //     </div>
    //   </div>
    // </div>

    <div className={boxStyles.wrap}>
      <div className={boxStyles.cube}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        />
      </div>
    </div>
  )
}
export default Box
