module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Portfolio built with Gatsby`,
    author: `Michl`,
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: /assets/, // See below to configure properly
    //     },
    //   },
    // },
    // "gatsby-transformer-inline-svg",
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#cb70f8`,
        showSpinner: true,
      },
    },
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/tablogo.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
