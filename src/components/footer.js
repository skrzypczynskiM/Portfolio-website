import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>Handcrafted by Just Flow, © 2019</p>
      <hr className={footerStyles.spaceBar}></hr>
      <p>
        Powered by <i></i> Gatsby
      </p>
    </footer>
  )
}

export default Footer
