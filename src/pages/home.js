import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import HomePage from "../components/homePage"

const Home = () => {
  return (
    <Layout>
      <Head title="Home" />
      <HomePage />
    </Layout>
  )
}
export default Home
