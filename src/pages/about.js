import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Img from "gatsby-image"
import Image from "../components/assets/Image.svg"

const aboutPage = props => {
  return (
    <Layout>
      <SEO title="About" />
      <div>
        <h1 style={{ letterSpacing: -2 }}>About DeveloperAdam</h1>

        <div>
          <p>
            It was only last year in August that I decided to dedicate all my
            spare time into learning how to code. I started off with the very
            basics, HTML, CSS & JavaScript.
          </p>
          <p>
            I have more so recently been learning JS frameworks React &
            GatsbyJS. I've been enjoying both of these thoroughly and hope I'll
            be able to become a fullstack development using these latest
            technologies along with NodeJS & GraphQL as backend.
          </p>
          {/* <Img fluid={props.data.file.childImageSharp.fluid} styles={{}} /> */}
          <Image
            style={{
              height: 300,
              width: 300,
              paddingBottom: 120,
            }}
          />
        </div>
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
