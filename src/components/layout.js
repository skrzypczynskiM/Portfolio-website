import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import NavBar from "../components/navBar"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div>
      <div className={layoutStyles.container}>
        <NavBar />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
