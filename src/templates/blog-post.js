import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import SubscriptionFrom from "../components/subscriptionForm"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1
          style={{
            fontFamily: "Open Sans",
            fontSize: "1.75em",
          }}
          className="f1 fw6 pa0 ma0 tc-ns lh-title"
        >
          {post.frontmatter.title}
        </h1>
        <p style={{ fontFamily: "Open Sans" }} className="pv3 tc-ns black-60">
          {post.frontmatter.date} • 4 min read
        </p>
        <div
          style={{
            fontFamily: "Montserrat",
          }}
          className="lh-copy fw4 f4"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <div className="pv4 tc">
          <p
            style={{ fontFamily: "Open Sans" }}
            className="f3 fw7 mt4 mb0 pb2 black-70"
          >
            Stay updated
          </p>
          <SubscriptionFrom />
          <p style={{ fontFamily: "Open Sans" }} className="f3 fw6 mt5">
            Other popular posts
          </p>
        </div>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
