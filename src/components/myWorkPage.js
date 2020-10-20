import React from "react"
import { Link } from "gatsby"
import myWorkPageStyles from "./myWorkPage.module.scss"

const MyWorkPage = () => {
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
          <Link
            to={`/portfolio/Banitz`}
            className={myWorkPageStyles.galleryLink}
          >
            <figure className={myWorkPageStyles.galleryImage}>
              <div
                className={`${myWorkPageStyles.img} ${myWorkPageStyles.banitz}`}
              ></div>
              <figcaption>Banitz</figcaption>
            </figure>
          </Link>

          <Link to={`/portfolio/Bodo`} className={myWorkPageStyles.galleryLink}>
            <figure className={myWorkPageStyles.galleryImage}>
              <div
                className={`${myWorkPageStyles.img} ${myWorkPageStyles.bodo}`}
              ></div>
              <figcaption>Bodo</figcaption>
            </figure>
          </Link>

          <Link
            to={`/portfolio/Cantry`}
            className={myWorkPageStyles.galleryLink}
          >
            <figure className={myWorkPageStyles.galleryImage}>
              <div
                className={`${myWorkPageStyles.img} ${myWorkPageStyles.cantry}`}
              ></div>
              <figcaption>Cantry</figcaption>
            </figure>
          </Link>

          <Link
            to={`/portfolio/3-room`}
            className={myWorkPageStyles.galleryLink}
          >
            <figure className={myWorkPageStyles.galleryImage}>
              <div
                className={`${myWorkPageStyles.img} ${myWorkPageStyles.room3}`}
              ></div>
              <figcaption>3-room</figcaption>
            </figure>
          </Link>

          <Link
            to={`/portfolio/Portfolio`}
            className={myWorkPageStyles.galleryLink}
          >
            <figure className={myWorkPageStyles.galleryImage}>
              <div
                className={`${myWorkPageStyles.img} ${myWorkPageStyles.portfolio}`}
              ></div>
              <figcaption>Portfolio</figcaption>
            </figure>
          </Link>

          <Link
            to={`/portfolio/CompanyTable`}
            className={myWorkPageStyles.galleryLink}
          >
            <figure className={myWorkPageStyles.galleryImage}>
              <div
                className={`${myWorkPageStyles.img} ${myWorkPageStyles.companyTable}`}
              ></div>
              <figcaption>CompanyTable</figcaption>
            </figure>
          </Link>

          <Link
            to={`/portfolio/Expensify`}
            className={myWorkPageStyles.galleryLink}
          >
            <figure className={myWorkPageStyles.galleryImage}>
              <div
                className={`${myWorkPageStyles.img} ${myWorkPageStyles.expensify}`}
              ></div>
              <figcaption>Expensify</figcaption>
            </figure>
          </Link>
          <Link
            to={`/portfolio/CatchOfTheDay`}
            className={myWorkPageStyles.galleryLink}
          >
            <figure className={myWorkPageStyles.galleryImage}>
              <div
                className={`${myWorkPageStyles.img} ${myWorkPageStyles.catchOfTheDay}`}
              ></div>
              <figcaption>CatchOfTheDay</figcaption>
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
              <figcaption>Placeholder</figcaption>
            </figure>
          </Link>
        </article>
      </div>
    </div>
  )
}

export default MyWorkPage
