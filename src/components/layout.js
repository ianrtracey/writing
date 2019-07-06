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
      { text: "WRITING", link: "/" },
      { text: "SPEAKING", link: "/speaking" },
      { text: "ABOUT", link: "/about" },
      { text: "CONTACT", link: "/contact" },
    ]

    const header = (
      <div
        style={{
          fontFamily: "Raleway",
        }}
      >
        <h1 className="f1 sans-serif fw7 tc pa0 ma0 link dim">
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontFamily: "Raleway",
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <div className="f4 tc pa2 black-50">Absurdity for an absurd world</div>
        <div className="mw6 flex center justify-between ph4 mt3 fw3">
          {menuItems.map(mi => (
            <Link
              style={{ textDecoration: "none", fontFamily: "Raleway" }}
              className="black-90 link dim"
              activeClassName={"black-40"}
              to={mi.link}
            >
              {mi.text}
            </Link>
          ))}
        </div>
      </div>
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
        <main
          style={{
            marginTop: "4em",
          }}
        >
          {children}
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default Layout
