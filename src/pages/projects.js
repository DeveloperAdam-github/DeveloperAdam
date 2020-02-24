import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Img from "gatsby-image"
import Image from "../components/assets/Image.svg"

const aboutPage = props => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div>
        <h1>Here are my projects.....</h1>
      </div>
    </Layout>
  )
}

export default aboutPage

export const query = graphql`
  query {
    file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
