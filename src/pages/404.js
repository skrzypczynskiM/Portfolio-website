import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"

import Rocket from "../images/rocket.svg"
import Earth from "../images/earth.svg"
import Astronaut from "../images/astronaut.svg"
import Moon from "../images/moon.svg"
import Page404 from "../images/page404.svg"

import styles404 from "./404.module.scss"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <div className={styles404.container404}>
        <div className={styles404.stars}>
          <div className={styles404.centralBody}>
            <img
              className={styles404.image404}
              // src="http://salehriaz.com/404Page/img/404.svg"
              src={Page404}
              width={300}
            />
            <Link
              href="http://salehriaz.com/404Page/404.html"
              className={styles404.btnGoHome}
              to="/home/"
            >
              GO BACK HOME
            </Link>
          </div>
          <div className={styles404.objects}>
            <img
              className={styles404.object_rocket}
              // src="http://salehriaz.com/404Page/img/rocket.svg"
              src={Rocket}
              width={40}
            />
            <div className={styles404.earthMoon}>
              <img
                className={styles404.object_earth}
                // src="http://salehriaz.com/404Page/img/earth.svg"
                src={Earth}
                width={100}
              />
              <img
                className={styles404.object_moon}
                // src="http://salehriaz.com/404Page/img/moon.svg"
                src={Moon}
                width={80}
              />
            </div>
            <div className={styles404.box_astronaut}>
              <img
                className={styles404.box_astronaut}
                // src="http://salehriaz.com/404Page/img/astronaut.svg"
                src={Astronaut}
                width={140}
              />
            </div>
          </div>
          <div className={styles404.glowing_stars}>
            <div className={styles404.star} />
            <div className={styles404.star} />
            <div className={styles404.star} />
            <div className={styles404.star} />
            <div className={styles404.star} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
