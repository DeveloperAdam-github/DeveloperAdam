import React from "react"
import Link from "gatsby-link"

const NavPage = () => (
  <div
    style={{
      background: "none",
      paddingTop: "10px",
      paddingBottom: "70px",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        color: "white",
        paddingLeft: 8,
        paddingTop: 2,
        paddingBottom: 2,
        paddingRight: 8,
        borderRadius: 6,
        margin: 10,
        fontWeight: 700,
      }}
    >
      <li
        style={{
          backgroundColor: "coral",
          color: "white",
          paddingLeft: 8,
          paddingTop: 2,
          paddingBottom: 2,
          paddingRight: 8,
          borderRadius: 6,
          margin: 10,
          fontWeight: 700,
          display: "block",
        }}
      >
        <Link to="/" style={{ color: "white", fontSize: 18 }}>
          Home
        </Link>
      </li>
      <li
        style={{
          backgroundColor: "coral",
          paddingLeft: 8,
          paddingTop: 2,
          paddingBottom: 2,
          paddingRight: 8,
          borderRadius: 6,
          margin: 10,
        }}
      >
        <Link to="/about" style={{ color: "white", fontSize: 18 }}>
          About
        </Link>
      </li>
      <li
        style={{
          backgroundColor: "coral",
          paddingLeft: 8,
          paddingTop: 2,
          paddingBottom: 2,
          paddingRight: 8,
          borderRadius: 6,
          margin: 10,
        }}
      >
        <Link to="/blog" style={{ color: "white", fontSize: 18 }}>
          Blog
        </Link>
      </li>
      <li
        style={{
          backgroundColor: "coral",
          paddingLeft: 8,
          paddingTop: 2,
          paddingBottom: 2,
          paddingRight: 8,
          borderRadius: 6,
          margin: 10,
        }}
      >
        <Link to="/projects" style={{ color: "white", fontSize: 18 }}>
          Projects
        </Link>
      </li>
    </ul>
  </div>
)

export default NavPage
