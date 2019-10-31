import React from "react"
import Footer from "../components/footer"
import NavBar from "../components/navbar"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    // <div className={layoutStyles.container222}>
    //   <div className={layoutStyles.container}>
    //     <NavBar />
    //     {props.children}
    //   </div>
    //   <Footer />
    // </div>
    // <div
    <div className={layoutStyles.container}>
      <NavBar />
      {props.children}
      {/* <div className={layoutStyles.layoutPage}> */}
      <Footer />
      {/* </div> */}
    </div>
  )
}

export default Layout
