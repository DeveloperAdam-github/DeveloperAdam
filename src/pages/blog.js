import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import BlockContent from "@sanity/block-content-to-react"
import SEO from "../components/seo"

const blogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <p style={{ fontSize: "85%", fontWeight: "bold" }}>LATEST BLOG POSTS</p>
      {data.allSanityPost.edges.map((edge, index) => {
        return (
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              margin: "20px",
            }}
          >
            <li style={{ listStyle: "none", cursor: "auto" }} key={index}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedAt}</p>
              <p style={{ fontWeight: "", textDecoration: "underline" }}>
                {edge.node.author !== null ? edge.node.author.name : ""}
              </p>
              <img
                style={{ width: "250px" }}
                src={
                  edge.node.mainImage !== null
                    ? edge.node.mainImage.asset.url
                    : ""
                }
              />
              <div style={{ backgroundColor: "white", padding: "20px" }}>
                <BlockContent
                  blocks={edge.node._rawBody}
                />
              </div>
            </li>
          </div>
        )
      })}
    </Layout>
  )
}

export default blogPage

export const pageQuery = graphql`
  query {
    allSanityPost(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          id
          title
          author {
            id
            name
          }
          publishedAt(formatString: "Do MMMM, YYYY")
          _rawBody(resolveReferences: { maxDepth: 10 })
          mainImage {
            asset {
              url
              fluid(maxWidth: 200) {
                src
              }
            }
          }
        }
      }
    }
  }
`
