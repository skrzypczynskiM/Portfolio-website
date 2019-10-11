import React from "react"
import Layout from "../components/layout"
import aboutStyle from "./home.module.scss"

const About = () => {
  return (
    <Layout>
      <div className={aboutStyle.bg}>
        <h1>Hi,</h1>
        <p>I'm Michl,</p>
        <p>Front-End Web Developer.</p>
      </div>
    </Layout>
  )
}

export default About
