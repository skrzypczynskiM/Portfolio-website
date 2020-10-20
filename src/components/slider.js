import React from "react"
import { Carousel } from "react-responsive-carousel"

export default ({ projectName, pictures }) => {
  console.log(pictures)
  return (
    <Carousel
      dynamicHeight={true}
      emulateTouch={true}
      useKeyboardArrows={true}
      showIndicators={false}
      showStatus={false}
    >
      <div>
        <img
          src={require(`./projects/${projectName}/${pictures.img1}`)}
          alt="TEXT"
        />
      </div>
      <div>
        <img
          src={require(`./projects/${projectName}/${pictures.img2}`)}
          alt="TEXT"
        />
      </div>
      <div>
        <img
          src={require(`./projects/${projectName}/${pictures.img3}`)}
          alt="TEXT"
        />
      </div>
      <div>
        <img
          src={require(`./projects/${projectName}/${pictures.img4}`)}
          alt="TEXT"
        />
      </div>

      <div>
        <img
          src={require(`./projects/${projectName}/${pictures.img5}`)}
          alt="TEXT"
        />
      </div>
    </Carousel>
  )
}
