import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

import "../layouts/tachyons/css/tachyons.css"
import "../layouts/custom.css"

const menuItems = [
  { text: "Writing", link: "/" },
  { text: "Speaking", link: "/speaking" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
]

const MenuModal = ({ closeHandler }) => (
  <div
    style={{ height: "100vh", width: "100%", zIndex: 1 }}
    className="flex absolute top-0 left-0 bg-white-90"
  >
    <div
      className="pa4 absolute flex f3 fw9 mid-gray"
      style={{
        width: "100%",
        justifyContent: "flex-end",
        fontFamily: "Open Sans",
      }}
    >
      <button
        onClick={closeHandler}
        className="fw4 input-reset ba white bg-black-70 pa2"
      >
        close
      </button>
    </div>
    <div style={{ fontFamily: "Open Sans" }} className="pa4 mt6">
      {menuItems.map(mi => (
        <div className="pv3">
          <Link
            to={mi.link}
            style={{ textDecoration: "none", boxShadow: "none" }}
            className="link dim f2 pv2 fw9 mid-gray"
            activeClassName="link dim f2 pv2 fw8 black-20"
          >
            {mi.text}
          </Link>
        </div>
      ))}
    </div>
  </div>
)

class Layout extends React.Component {
  state = {
    shouldShowMenuModal: false,
  }

  showMenuModal = e => {
    e.preventDefault()
    this.setState({
      shouldShowMenuModal: true,
    })
    document.documentElement.style.overflow = "hidden"
    document.body.scroll = "no"
  }

  closeMenuModal = e => {
    e.preventDefault()
    this.setState({
      shouldShowMenuModal: false,
    })
  }

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const { shouldShowMenuModal } = this.state
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
        <div className="mw6 flex justify-center ph4 mt3 fw3 grow pointer">
          <div>
            <button
              onClick={this.showMenuModal}
              className="f4 fw5 input-reset ba b--black bg-transparent pa2"
            >
              menu
            </button>
          </div>
          {/* {menuItems.map(mi => (
            <Link
              style={{
                textDecoration: "none",
                fontFamily: "Open Sans",
              }}
              className="black-90 link dim"
              activeClassName={"black-30"}
              to={mi.link}
            >
              {mi.text}
            </Link>
          ))} */}
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
        {shouldShowMenuModal && (
          <MenuModal closeHandler={this.closeMenuModal} />
        )}
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
