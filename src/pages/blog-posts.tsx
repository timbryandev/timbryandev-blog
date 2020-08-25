import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/blogPost.scss"

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  useEffect(() => {
    document.querySelector(".navbar").scrollIntoView()
  })

  return (
    <Layout>
      <SEO title="Blog" />

      <h2>
        <span className="fas fa-rss" aria-hidden="true"></span> {""}
        Blog Posts
      </h2>
      <p>Take a look at some of my ramblings:</p>
      <p>(Pagination, search and filtering are on my ToDo list!)</p>
      <hr />

      {edges.map(edge => {
        const {
          excerpt,
          date,
          featuredImage,
          path,
          title,
          updated,
        } = edge.node.frontmatter
        return (
          <div className="card" key={path}>
            <h2 className="card-title">{title}</h2>

            <p className="card-dates">
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
              </small>{" "}
            </p>

            <div className="card-content">
              {featuredImage ? (
                <Img
                  style={{ width: "50%" }}
                  fluid={
                    edge.node.frontmatter.featuredImage.childImageSharp.sizes
                  }
                />
              ) : (
                ""
              )}
              <div
                className="card-excerpt"
                dangerouslySetInnerHTML={{ __html: excerpt }}
              />
            </div>
            <br />
            <p>
              <Link to={path} className="button">
                Continue reading
              </Link>
            </p>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          id
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
    }
  }
`

export default Blog
