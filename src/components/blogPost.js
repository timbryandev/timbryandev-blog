import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

import "../styles/blogPost.scss"

const Template = ({ data, pageContext }) => {
  const {
    title,
    date,
    updated,
    featuredImage,
  } = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html
  const { next, prev } = pageContext

  useEffect(() => {
    document.querySelector(".navbar").scrollIntoView()
  })

  function postHeader() {
    return (
      <>
        <h2>{title}</h2>
        {featuredImage ? (
          <Img fluid={featuredImage.childImageSharp.sizes} />
        ) : (
          ""
        )}

        <p>
          {updated && (
            <small>
              <em>
                Updated on <strong>{updated}</strong>,<br />
              </em>
            </small>
          )}

          <small>
            <em>
              Posted on <strong>{date}</strong>
            </em>
          </small>
        </p>
      </>
    )
  }

  function postFooter() {
    return (
      <>
        <footer>
          <p style={{ textAlign: "center" }}>
            If you want to keep reading, here are some more posts:
          </p>
          <div className="blog-post-nav">
            {prev ? (
              <Link className="button" to={prev.frontmatter.path}>
                Previous{" "}
                <span role="img" aria-label="point-left">
                  👈{" "}
                </span>
                <br />
                {prev.frontmatter.title}{" "}
              </Link>
            ) : (
              <div className="spacer"></div>
            )}{" "}
            <Link className="button" to="/blog">
              All Blog Posts
              <span role="img" aria-label="point-okay">
                👌{" "}
              </span>
            </Link>{" "}
            {next ? (
              <Link className="button" to={next.frontmatter.path}>
                Next{" "}
                <span role="img" aria-label="point-right">
                  👉
                </span>{" "}
                <br />
                {next.frontmatter.title}
              </Link>
            ) : (
              <div className="spacer"></div>
            )}
          </div>
          <br />
          <br />
          <br />
          <p>Got some feedback? Let me know:</p>
          <ContactForm />
        </footer>
      </>
    )
  }

  return (
    <Layout siteTitle={title}>
      <SEO title={title} />

      {postHeader()}

      <hr />

      <h3>
        <center>{title}</center>
      </h3>

      <article
        className="blogpost"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="end-of-content">
        <p>End of content</p>
      </div>

      {postFooter()}
    </Layout>
  )
}

export const postQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        updated(formatString: "DD MMM YYYY")
        path
        tags
        excerpt
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 900) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

export default Template
