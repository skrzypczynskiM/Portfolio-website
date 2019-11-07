import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           author
  //         }
  //       }
  //     }
  //   `)

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
