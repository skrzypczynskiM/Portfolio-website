import React from "react"
import Layout from "../components/layout"
// import aboutStyle from "./home.module.scss"
import Head from "../components/head"
import AboutPage from "../components/aboutPage"

const About = () => {
  return (
    <Layout>
      <Head title="About" />

      <AboutPage />
    </Layout>
  )
}

export default About
