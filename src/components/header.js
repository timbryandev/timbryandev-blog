import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

// import styleHeader from "./layout.scss"
import "../styles/header.scss"

function Nav(props) {
  let [bShowNav, setShowNav] = useState(0)

  const toggleNav = () => {
    setShowNav((bShowNav = !bShowNav))
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link className="logo" to="/">
          TIM{" "}
          <svg
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="TBLogo"
            viewBox="0 0 304.96 451.29"
          >
            <polygon
              className="logo-arrow-right"
              fill="#fefefe"
              points="248.96 225.87 150.25 324.59 178.25 352.59 304.96 225.87 178.25 99.16 150.25 127.16 248.96 225.87"
            />
            <polygon
              className="logo-arrow-left"
              fill="#95c623"
              points="0 324.58 126.71 451.29 154.71 423.29 56 324.58 154.71 225.86 154.49 225.65 154.71 225.43 56 126.71 154.71 28 126.71 0 0 126.71 98.93 225.65 0 324.58"
            />
          </svg>{" "}
          <span className="text-primary">BRYAN</span>
        </Link>

        <button className="nav-dropdown-toggle" onClick={toggleNav.bind(this)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            className="nav-hamburger"
            viewBox="0 0 32 32"
            width="32px"
          >
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
          </svg>
        </button>

        <ul className={`nav-links ${bShowNav ? "show" : ""}`}>
          <li>
            <Link to="/" onClick={toggleNav.bind(this)}>
              <span className="fas fa-laptop-code" aria-hidden="true"></span>
              Home
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={toggleNav.bind(this)}>
              <span className="fas fa-laptop-code" aria-hidden="true"></span>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog-posts" onClick={toggleNav.bind(this)}>
              <span className="fas fa-code" aria-hidden="true"></span> Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const Header = ({ siteTitle }) => {
  return (
    <>
      <header id="header">
        <div className="header-background" role="none"></div>
        <h1 className="sr-only">{siteTitle}</h1>
        <div className="header-jumbo">
          <svg
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            className="TBLogo"
            viewBox="0 0 304.96 451.29"
          >
            <polygon
              className="logo-arrow-right"
              fill="#fefefe"
              points="248.96 225.87 150.25 324.59 178.25 352.59 304.96 225.87 178.25 99.16 150.25 127.16 248.96 225.87"
            ></polygon>
            <polygon
              className="logo-arrow-left"
              fill="#95c623"
              points="0 324.58 126.71 451.29 154.71 423.29 56 324.58 154.71 225.86 154.49 225.65 154.71 225.43 56 126.71 154.71 28 126.71 0 0 126.71 98.93 225.65 0 324.58"
            ></polygon>
          </svg>
        </div>
      </header>
      <Nav />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
