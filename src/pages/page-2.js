import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default props => {
  console.log(props)

  return (
    <div>
      <h1>Hello gatsby</h1>
      <Img fluid={props.data.file.childImageSharp.fluid} />
    </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
