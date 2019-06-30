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
      { text: "ABOUT", link: "/writing" },
      { text: "SPEAKING", link: "/speaking" },
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
        <div className="mw6 center flex justify-between mt3 sans-serif fw4">
          {menuItems.map(mi => (
            <Link
              style={{ textDecoration: "none", fontFamily: "Raleway" }}
              to={mi.link}
            >
              <p
                style={{ textDecoration: "none", fontFamily: "Open Sans" }}
                className="pa0 ma0 black-80 fw9"
              >
                {mi.text}
              </p>
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
