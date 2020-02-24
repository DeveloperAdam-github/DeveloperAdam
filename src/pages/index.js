import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Img from "gatsby-image"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <div
        className="banner-header"
        style={{ position: "relative", textAlign: "center", color: "white" }}
      >
        <Img fluid={props.data.file.childImageSharp.fluid} styles={{}} />
        <div
          className="banner-header-text"
          style={{
            background: "rgba(34, 30, 31, 0.98)",
            borderRadius: "5px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1>Welcome</h1>
          <p style={{ color: "coral" }}>Check out my projects or my blog!</p>
        </div>
      </div>
      <hr />
      <h1 style={{ letterSpacing: -2 }}>Home Page </h1>
      <p>
        Hi there, my name is Adam and I am an aspiring Website Developer
        residing in South east England.
        <br />
        <br />
        Feel free to check out my projects, or my blog to see what I am working
        on currently.
      </p>

      <div
        className="contactme"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 200,
        }}
      >
        <h2>Got a question?</h2>
        <p>Get in touch ....</p>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "450px",
          }}
        >
          <input type="text" id="name" placeholder="Name" />
          <input type="text" id="email" placeholder="Email" />
          <textarea name="" id="message" cols="20" rows="5"></textarea>
          <button
            style={{
              backgroundColor: "coral",
              fontSize: "20px",
              width: "100px",
              marginLeft: "10.1rem",
              marginTop: "0.5rem",
              borderRadius: "4px",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "BannerHeader.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
