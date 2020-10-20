import React from "react"
import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <div className={aboutStyles.aboutPage}>
      <div className={aboutStyles.aboutMe}>
        <div className={aboutStyles.quoteWrapper}>
          <blockquote>
            <h4 className={aboutStyles.purple}>
              Success consists of{" "}
              <span className={aboutStyles.gray}>
                going from failure to failure without loss of{" "}
              </span>
              enthusiasm.
            </h4>
          </blockquote>{" "}
          <cite>Winston Churchill</cite>
        </div>

        <div className={aboutStyles.meInfo}>
          <div className={aboutStyles.button1}>
            <h1>About me</h1>
            <div
              className={`${aboutStyles.horizontal} ${aboutStyles.forDesktop}`}
            ></div>
            <div
              className={`${aboutStyles.vertical} ${aboutStyles.forDesktop}`}
            ></div>
            <div className={aboutStyles.theBeginnings}>
              <p>
                My journey with programming started in 2015, alongside studying
                Bioinformatics major at Wrocław University of Environmental and
                Life Sciences.
              </p>

              <p>
                My first Hello World came from Python 2.7 console. At this very
                moment, the world of programming became wide open for me and I
                knew what I'm going to do for a living. Along the way, I got to
                learn some basics of R, C, C#, Bash, and Java.
              </p>
              <p>
                Each of these languages had its perks (except C maybe ;) ) but
                it wasn't until I discovered JavaScript when I truly became
                passionate about programming and Web Development in general.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
