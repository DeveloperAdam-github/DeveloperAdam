module.exports = {
  siteMetadata: {
    title: `DeveloperAdam`,
    description: `DeveloperAdam, my website, my experiences, my projects.`,
    author: `@DeveloperAdam`,
    siteUrl: `https://developeradam.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          "script-src": "'self' www.developeradam.com",
          "style-src": "'self' 'unsafe-inline'",
          "img-src": "'self' data: www.developeradam.com",
          // you can add your directives or override defaults
        },
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "7v5vogcz",
        dataset: "production",
        token:
          "skSGqPDl6NXALl9UINiXP6R9LmwgrJWSGlhuECKsWpcDtzcJBXmIoRwwhNsVSL8dpUGXF01tp4pYwjxKaTRBeTu4Gus7OHc8ulR51NtJR0j46m30yTpA6LK9XEDtKpjVyO7oluWCJSqPgj1pf2aMgk5ToYfaF2TOKLQUt7Qd0L9ipt506V3B",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
