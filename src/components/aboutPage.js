import React from "react"
import NavBar from "../components/navbar"
import aboutStyles from "./about.module.scss"

const aboutPage = () => {
  return (
    <div className={aboutStyles.aboutPage}>
      <div className={aboutStyles.aboutMe}>
        {/*  QUOOOOOOTE */}
        <div className={aboutStyles.blockquoteWrapper}>
          <div className={aboutStyles.blockquote}>
            <h1>
              Success consists of{" "}
              <span className={aboutStyles.style}>
                going from failure to failure without loss of{" "}
              </span>
              enthusiasm.
            </h1>
            <h4 className={aboutStyles.style}>
              {" "}
              <br /> &mdash; Winston Churchill
            </h4>
          </div>
        </div>

        {/* NED OF QUOOOOOOTE */}
        {/* <button className={aboutStyles.button1}>
          Fancy Button
          <div className={aboutStyles.horizontal}></div>
          <div className={aboutStyles.vertical}></div>
        </button> */}

        <div className={aboutStyles.meInfo}>
          <div className={aboutStyles.button1}>
            <h1>About me</h1>
            <div className={aboutStyles.horizontal}></div>
            <div className={aboutStyles.vertical}></div>
            <div className={aboutStyles.theBeginnings}>
              <p>
                My journey with programming started in 2015, alongside with
                studying Bioinformatics major at Wrocław University of
                Environmental and Life Sciences.{" "}
              </p>

              <p>
                {" "}
                My first Hello World came from Python 2.7 console. At this very
                moment the world of programming became wide open for me and I
                knew what I'm going to do for a living. Along the way I got to
                learn some basics of R, C, C#, Bash and Java.{" "}
              </p>
              <p>
                Each of these languages had its perks (except C maybe ;) ) but
                it wasn't until I discovered JavaScript when I truly became
                passionate about programming and Web Development in general.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* END OF JOURNEYYYYY */}

        {/* <div className={aboutStyles.mePersonality}>
          <h1>As a person</h1>
          <p className={aboutStyles.theBeginnings}>
            {" "}
            Lorem Ipsolumn Lorem Ipsolumn Lorem Ipsolumn Lorem Ipsolumn Lorem
            Ipsolumn Lorem Ipsolumn Lorem Ipsolumn Lorem Ipsolumn
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default aboutPage
