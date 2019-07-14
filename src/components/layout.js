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

const MenuModal = () => (
  <div
    style={{ height: "100vh", width: "100%", zIndex: 1 }}
    className="absolute inherit top-0 left-0 bg-white-90"
  >
    <div className="flex justify-center">
      <div style={{ fontFamily: "Open Sans" }} className="pa4 mt6 tc">
        {menuItems.map(mi => (
          <div className="pv3">
            <Link
              to={mi.link}
              style={{ textDecoration: "none", boxShadow: "none" }}
              className="grow pointer link dim f2 pv2 fw6 black-90"
              activeClassName="black-30"
            >
              {mi.text}
            </Link>
          </div>
        ))}
      </div>
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

  renderMenuButton = () => {
    const { shouldShowMenuModal } = this.state
    const onClickHandler = shouldShowMenuModal
      ? this.closeMenuModal
      : this.showMenuModal
    const text = shouldShowMenuModal ? "close" : "menu"
    return (
      <div>
        <button
          onClick={onClickHandler}
          className="f4 fw5 input-reset ba b--black bg-transparent pa2 grow pointer"
        >
          {text}
        </button>
      </div>
    )
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
        <div className="flex align-center justify-between">
          <h1 className="f2 sans-serif fw7 tc pa0 ma0 link dim">
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
          <div
            className="mw6 flex justify-center fw3 grow pointer"
            style={{ zIndex: 1 }}
          >
            {this.renderMenuButton()}
          </div>
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
