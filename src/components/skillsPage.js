import React, { useState } from "react"
import skillsStyle from "./skills.module.scss"
import RotatingBox from "./rotatingBox"

const SkillsPage = () => {
  const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "Styled-Components",
    "Sass",
    "Less",
    "Stylus",
    "React",
    "Redux",
  ]

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
            <h4>Languages I speakkk:</h4>
            {/* {languages.map(language => (
              <p className={skillsStyle.language}>{language}</p>
            ))} */}
            <p>
              HTML, CSS, JavaScript, Styled-Components, Sass, Less, Stylus,
              React, Redux
            </p>
            <h4>Other:</h4>
            <p>
              Jest, Enzyme, Bootstrap , Gatsby, GitHub, GraphQL, GraphqlYoga,
              Firebase, Figma, Inkscape, Visual Studio Code, Atom
            </p>
          </div>
          {/* <div className={skillsStyle.asPerson}>
            <div className={skillsStyle.personImg}></div>
          </div> */}
          <div className={skillsStyle.vl}></div>
        </div>
      </div>
    </div>
  )
}
export default SkillsPage
