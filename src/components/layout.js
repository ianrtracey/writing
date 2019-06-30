import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

import "../layouts/tachyons/css/tachyons.css"
import "../layouts/custom.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const menuItems = [
      { text: "HOME", link: "/" },
      { text: "WRITING", link: "/writing" },
      { text: "SPEAKING", link: "/speaking" },
      { text: "CONTACT", link: "/contact" },
    ]

    const header = (
      <header>
        <h1 className="f1 sans-serif fw7 tc pa0 ma0 link dim">
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <div className="mw6 center flex justify-between mt4 sans-serif fw4">
          {menuItems.map(mi => (
            <Link style={{ textDecoration: "none" }} to={mi.link}>
              {mi.text}
            </Link>
          ))}
        </div>
      </header>
    )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
