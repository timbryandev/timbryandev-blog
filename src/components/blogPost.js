import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

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

  return (
    <Layout>
      <SEO title={title} />
      <h2>{title}</h2>
      {featuredImage ? <Img fluid={featuredImage.childImageSharp.sizes} /> : ""}

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
      <hr />
      <article
        className="blogpost"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <footer className="blog-post-nav">
        {prev && (
          <Link className="button" to={prev.frontmatter.path}>
            Previous{" "}
            <span role="img" aria-label="point-left">
              👈{" "}
            </span>
            {prev.frontmatter.title}{" "}
          </Link>
        )}{" "}
        {/* <Link className="button" to="/blog">
          Blog Home
          <span role="img" aria-label="point-okay">
            👌{" "}
          </span>
        </Link>{" "} */}
        {next && (
          <Link className="button" to={next.frontmatter.path}>
            Next{" "}
            <span role="img" aria-label="point-right">
              👉
            </span>{" "}
            {next.frontmatter.title}
          </Link>
        )}
      </footer>
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
