import { Link } from "gatsby"
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

        <section className="site-links">
          <h2>Site Links</h2>
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/#contact"> Contact</Link>
            </li>
            <li>
              <Link to="/blog-posts"> Blog</Link>
            </li>
          </ul>
        </section>

        <section className="site-info">
          <h2>Site Meta</h2>
          <ul>
            <li>
              <Link to="/sitemap.xml">Sitemap</Link>
            </li>
            <li>
              <Link to="/rss.xml"> RSS Feed</Link>
            </li>
          </ul>
        </section>
      </div>
      <section className="copyright">
        <hr />
        <p>
          &copy; {new Date().getFullYear()} - Designed and developed by{" "}
          <a href="https://timbryan.dev">Tim&#xA0;Bryan</a>. All right Reversed.
        </p>
      </section>
    </footer>
  )
}

export default Footer
