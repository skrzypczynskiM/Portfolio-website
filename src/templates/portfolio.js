import React, { useRef, useState } from "react"
import { graphql, Link } from "gatsby"

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
        img1 {
          base
        }
        img2 {
          base
        }
        img3 {
          base
        }
        img4 {
          base
        }
        img5 {
          base
        }

        link
      }
      html
    }
  }
  # for production - comment out lines above and uncomment those below
  # query($slug: String!) {
  #   markdownRemark(fields: { slug: { eq: $slug } }) {
  #     frontmatter {
  #       title
  #       description
  #       img1
  #       img2
  #       img3
  #       img4
  #       img5
  #     }
  #     html
  #   }
  # }
`

const Portfolio = props => {
  // const arrow = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const displayText = e => {
    // if (isHovered) return
    setIsHovered(true)
  }

  const hideText = e => {
    if (!isHovered) return
    setIsHovered(false)
  }

  return (
    <Layout>
      <div className={projectStyles.projectPage}>
        <div className={projectStyles.container}>
          <Link to="/portfolio/">
            <div
              className={projectStyles.goBack}
              onMouseEnter={displayText}
              onMouseLeave={hideText}
            >
              {isHovered && <span>Back to projects</span>}
              <div
                className={`${projectStyles.paginate} ${projectStyles.right}`}
                // ref={arrow}
                // onHover={setIsHovered(true)}
                // onMouseEnter={displayText}
                // onMouseLeave={hideText}
                // onMouseOut={setIsHovered(false)}
              >
                <i></i>
                <i></i>
              </div>
            </div>
          </Link>
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
            <Slider
              projectName={props.data.markdownRemark.frontmatter.title}
              pictures={{
                // img1: props.data.markdownRemark.frontmatter.img1.base,
                // img2: props.data.markdownRemark.frontmatter.img2.base,
                // img3: props.data.markdownRemark.frontmatter.img3.base,
                // img4: props.data.markdownRemark.frontmatter.img4.base,
                // img5: props.data.markdownRemark.frontmatter.img5.base,

                // for production - comment out lines above and uncomment those below
                img1: props.data.markdownRemark.frontmatter.img1,
                img2: props.data.markdownRemark.frontmatter.img2,
                img3: props.data.markdownRemark.frontmatter.img3,
                img4: props.data.markdownRemark.frontmatter.img4,
                img5: props.data.markdownRemark.frontmatter.img5,
              }}
            />
          </div>
          <div className={projectStyles.button}>
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.data.markdownRemark.frontmatter.link}
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
