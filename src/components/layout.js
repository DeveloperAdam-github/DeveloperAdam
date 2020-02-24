import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../images/favicon.ico"
import Helmet from "react-helmet"

import Header from "./header"
import "./layout.css"
import NavPage from "../pages/nav"

import FBLogo from "../components/assets/FBLogo.svg"
import TwitterLogo from "../components/assets/TwitterLogo.svg"
import InstaLogo from "../components/assets/InstaLogo.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <NavPage />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: "15rem",
            display: "grid",
            gridTemplateColumns: "repeat (8,1fr)",
            gap: "10px",
          }}
        >
          © {new Date().getFullYear()}, DeveloperAdam
          <div
            style={{
              gridColumn: "7/9",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <ul
              style={{
                gridColumn: "7/9",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <a href="https://www.facebook.com/DeveloperAdam1">
                  <FBLogo
                    className="fblogo"
                    style={{
                      height: "30px",
                      width: "30px",
                      margin: "0.3rem",
                    }}
                  />
                </a>
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <a href="https://www.instagram.com/developeradam/">
                  <InstaLogo
                    style={{
                      height: "30px",
                      width: "30px",
                      margin: "0.3rem",
                    }}
                  />
                </a>
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <a href="https://twitter.com/developeradam_/">
                  <TwitterLogo
                    style={{
                      height: "30px",
                      width: "30px",
                      margin: "0.3rem",
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
