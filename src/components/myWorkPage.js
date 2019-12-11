import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import myWorkPageStyles from "./myWorkPage.module.scss"

const MyWorkPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allFile {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div className={myWorkPageStyles.portfolioPage}>
      <div className={myWorkPageStyles.container}>
        <h3>Portfolio</h3>
        <p>
          I always strive to build beautifully designed websites with a great
          focus on user experience. Check out my latest web software development
          portfolio projects.
        </p>
      </div>
      <div className={myWorkPageStyles.galleryContainer}>
        <article className={myWorkPageStyles.gallery}>
          {/* {data.allFile.edges.map((edge) => {
        return  */}
          <Link
            // to={`/portfolio/${data.allFile.edges.node.fields.slug}`}
            to={`/portfolio/Portfolio`}
            className={myWorkPageStyles.galleryLink}
          >
            <figure className={myWorkPageStyles.galleryImage}>
              {/* <img
              // src="https://unsplash.it/1200/1600?image=266"
              src="face.jpg"
              alt="blahhhhhhhhhhhhhhhhhhhhhhhhh"
              width={500}
              height={500}
            /> */}
              <div
                className={`${myWorkPageStyles.img} ${myWorkPageStyles.portfolio}`}
              ></div>
              <figcaption>View Project</figcaption>
            </figure>
          </Link>

          <Link
            // to={`/portfolio/${data.allFile.edges.node.fields.slug}`}
            to={`/portfolio/Expensify`}
            className={myWorkPageStyles.galleryLink}
          >
            <figure className={myWorkPageStyles.galleryImage}>
              <div
                className={`${myWorkPageStyles.img} ${myWorkPageStyles.expensify}`}
              ></div>
              <figcaption>View Project</figcaption>
            </figure>
          </Link>
          {/* <a
          className={myWorkPageStyles.galleryLink}
          href='https://unsplash.it/1200/1000?image=1014'
        >
          <figure className={myWorkPageStyles.galleryImage}>
            <img
              src='https://unsplash.it/1200/1000?image=1014'
              // width={1200}
              // height={1000}
            />
            <figcaption>View Project</figcaption>
          </figure>
        </a> */}
          <Link
            // to={`/portfolio/${data.allFile.edges.node.fields.slug}`}
            to={`/portfolio/CatchOfTheDay`}
            className={myWorkPageStyles.galleryLink}
          >
            <figure className={myWorkPageStyles.galleryImage}>
              <div
                className={`${myWorkPageStyles.img} ${myWorkPageStyles.catchOfTheDay}`}
              ></div>
              <figcaption>View Project</figcaption>
            </figure>
          </Link>

          <Link
            className={myWorkPageStyles.galleryLink}
            to={`/portfolio/placeholderForMyAwesomeProject`}
          >
            <figure className={myWorkPageStyles.galleryImage}>
              <img
                src="https://unsplash.it/1600/1600?image=923"
                width={1600}
                height={1600}
              />
              <figcaption>View Project</figcaption>
            </figure>
          </Link>
        </article>
      </div>
    </div>
  )
}

export default MyWorkPage
