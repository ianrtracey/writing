import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  fontFamily: "Raleway",
                }}
                className="f3 sans-serif ma0 pb1 black"
              >
                <Link
                  className="black-90 f3"
                  style={{ boxShadow: `none` }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <div className="mb1">
                <small
                  style={{
                    fontFamily: "Montserrat",
                  }}
                >
                  {node.frontmatter.date}
                </small>
              </div>
              <p
                style={{
                  fontFamily: "Montserrat",
                }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              {/* <Link to={node.fields.slug}>
                <p className="fl black-60 link dim">Read more →</p>
              </Link> */}
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
