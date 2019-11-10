import React from "react"

import Head from "../components/head"

import Layout from "../components/layout"

import indexStyles from "./index.module.scss"

import HomePage from "../components/homePage"
require("../styles/index.scss")

const IndexPage = () => {
  return (
    <div className={indexStyles.container}>
      <Layout>
        <Head title="Home" />
        <HomePage />
      </Layout>
    </div>
  )
}

export default IndexPage
