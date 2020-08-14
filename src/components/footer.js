import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import styleHeader from "./layout.scss"
import "../styles/footer.scss"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <section className="social-links">
          <h2>Find me online</h2>

          <ul>
            <li>
              <a href="https://twitter.com/timbryandev" title="Tim on Twitter">
                Twitter
              </a>{" "}
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/timbryandev/"
                title="Tim on LinkedIn"
              >
                LinkedIn
              </a>{" "}
            </li>
            <li>
              <a href="https://dev.to/timbryandev" title="Tim on Dev.to">
                Dev.to
              </a>{" "}
            </li>
            <li>
              <a href="mailto:hi@timbryan.dev" title="Send Tim an email">
                email
              </a>{" "}
            </li>
          </ul>
        </section>
        {/* <section className="more-reading">
          <h2>Something</h2>
          <p>Some more stuff will go here when i think of it!</p>
        </section> */}
        <section className="site-info">
          <h2>Site Info</h2>
          <ul>
            <li>
              <a href="/sitemap.xml">Sitemap</a>
            </li>
            <li>
              <Link to="/#about"> About</Link>
            </li>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <a href="/rss.xml"> RSS Feed</a>
            </li>
          </ul>
        </section>
      </div>
      <section className="copyright">
        <hr />
        <p>
          &copy; {new Date().getFullYear()} - Designed and developed by{" "}
          <Link to="/">Tim&#xA0;Bryan</Link>. All right Reversed.
        </p>
      </section>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
