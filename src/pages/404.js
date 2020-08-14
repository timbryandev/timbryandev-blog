import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This is not the page you were looking for&hellip;</p>
    <Link to="/">Best go back home where it&apos;s safe!</Link> <br />
  </Layout>
)

export default NotFoundPage
