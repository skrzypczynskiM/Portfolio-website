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
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img
          src={require(`./projects/${projectName}/${pictures.img2}`)}
          alt="TEXT"
        />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img
          src={require(`./projects/${projectName}/${pictures.img3}`)}
          alt="TEXT"
        />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img
          src={require(`./projects/${projectName}/${pictures.img4}`)}
          alt="TEXT"
        />
        {/* <p className="legend">Legend 4</p> */}
      </div>

      <div>
        {/* {!!pictures.img5 && ( */}
        <img
          src={require(`./projects/${projectName}/${pictures.img5}`)}
          alt="TEXT"
        />
        {/* )} */}
        {/* <img
          src={require(`./projects/${projectName}/${pictures.img5}`)}
          alt="TEXT"
        /> */}
      </div>
      {/* <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
      <p className="legend">Legend 4</p>
    </div> */}
    </Carousel>
  )
}
