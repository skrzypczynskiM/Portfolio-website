import React from "react"
import Footer from "../components/footer"
import NavBar from "../components/navbar"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
