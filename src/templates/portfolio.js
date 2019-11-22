import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import projectStyles from "./portfolio.module.scss"

import Slider from "../components/slider"
import "./carousel.min.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`

const Portfolio = props => {
  return (
    <Layout>
      <div className={projectStyles.projectPage}>
        <div className={projectStyles.container}>
          <h1 className={projectStyles.title}>
            {props.data.markdownRemark.frontmatter.title}
          </h1>
          <h3 className={projectStyles.description}>
            {props.data.markdownRemark.frontmatter.description}
          </h3>

          {/* <button className={projectStyles.learnMore}>
            <span className={projectStyles.circle}>
              <span
                className={`${projectStyles.icon} ${projectStyles.arrow}`}
              ></span>
            </span>
            <span className={projectStyles.buttonText}>Visit Page</span>
          </button> */}

          <div className={projectStyles.slider}>
            <Slider></Slider>
          </div>
          <div className={projectStyles.button}>
            <br />
            <a
              href="https://yourpalnurav.blogspot.com/"
              className={projectStyles.brkBtn}
            >
              Visit Page
            </a>
          </div>
          <div
            className={projectStyles.technicalSection}
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio