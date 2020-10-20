import React from "react"
import skillsStyle from "./skills.module.scss"
import RotatingBox from "./rotatingBox"

const SkillsPage = () => {
  return (
    <div className={skillsStyle.skillsPage}>
      <div className={skillsStyle.sectionOne}>
        <div className={skillsStyle.introduction}>
          <h3>Skills</h3>
          <p>
            Web as the universal platform pushes the boundaries of expectations,
            both from users and from companies. As a front-end developer I
            strive to stay up-to-date with new technologies so I can provide
            excellent Customer experience.
          </p>
        </div>
        <div className={skillsStyle.cubeHolder}>
          <RotatingBox />
        </div>
      </div>

      <div className={skillsStyle.sectionTwo}>
        <div className={skillsStyle.twoSides}>
          <div className={skillsStyle.vl}></div>
          <div className={skillsStyle.asDeveloper}>
            <div className={skillsStyle.devImg}></div>
            <h4>Front-end developer</h4>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <h4>Languages I speak:</h4>
            <p>
              React, Vue, Redux, Vuex, JavaScript, Typescript,
              Styled-Components, Scss, HTML, CSS
            </p>
            <h4>Other:</h4>
            <p>
              Gatsby, GitHub, Firebase, Java, Python, Jest, Enzyme, Bootstrap,
              GraphQL, Figma, Inkscape, Visual Studio Code, Atom
            </p>
          </div>

          <div className={skillsStyle.vl}></div>
        </div>
      </div>
    </div>
  )
}
export default SkillsPage
