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
              backgroundColor: "#eaeaea",
              padding: "20px",
              margin: "20px",
            }}
          >
            <li style={{ listStyle: "none", cursor: "auto" }} key={index}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedAt}</p>
              <img src={edge.node.mainImage !== null ? edge.node.mainImage.asset.url : ""}/>
              <div style={{ backgroundColor: "white", padding: "20px" }}>
                <BlockContent blocks={edge.node._rawBody} />
              </div>
            </li>
          </div>
        )
      })}
    </Layout>
  )
};

export default blogPage

export const pageQuery = graphql`
  query {
    allSanityPost(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          id
          title
          publishedAt(formatString: "Do MMMM, YYYY")
          _rawBody
          mainImage {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;
