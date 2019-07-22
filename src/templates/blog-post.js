import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import { rhythm, scale } from "../utils/typography"
import SubscriptionFrom from "../components/subscriptionForm"
import { getSubscribed } from "../utils/storage"
import { readingTimeInMinutes } from "../utils/reading"

class BlogPostTemplate extends React.Component {
  renderFooter() {
    const { previous, next } = this.props.pageContext
    const subscriptionSection = (
      <div>
        <p className="f3 fw6 lh-title" style={{ fontFamily: "Open Sans" }}>
          Stay updated
        </p>
        <SubscriptionFrom />
      </div>
    )

    const articleSwitcher = (
      <div
        className="flex items-between mb4"
        style={{ fontFamily: "Open Sans" }}
      >
        {previous && (
          <div
            className="tl"
            style={{
              width: "50%",
            }}
          >
            <p className="f5 fw6 pv3 ma0 pb1 black link dim">
              <Link to={previous.fields.slug} style={{ boxShadow: `none` }}>
                ←{previous.frontmatter.title}
              </Link>
            </p>
          </div>
        )}
        {next && (
          <div
            className="tr"
            style={{
              width: "50%",
            }}
          >
            <p className="f5 fw6 pv3 ma0 pb1 black link dim">
              <Link to={next.fields.slug} style={{ boxShadow: `none` }}>
                {next.frontmatter.title}→
              </Link>
            </p>
          </div>
        )}
      </div>
    )

    return (
      <div className="pv4 tc">
        {articleSwitcher}
        <Bio />
        {!getSubscribed() && subscriptionSection}
      </div>
    )
  }

  getReadingTime = () => {
    const post = this.props.data.markdownRemark
    return readingTimeInMinutes(post.html)
  }

  getFullPath = path => {
    const host = `www.ianrtracey.com`
    return `https://${host}${path}`
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const slug = this.props.pageContext.slug
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Link
          style={{ boxShadow: "none", textDecoration: "none" }}
          className="f4 br-pill ph3 pv2 mb2 dib b--black black fw5 ba bg-transparent mb4"
          to="/"
        >
          ←
        </Link>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={this.getFullPath(
            post.frontmatter.featuredImage.childImageSharp.sizes.src
          )}
          url={this.getFullPath(slug)}
        />
        <h1
          style={{
            fontFamily: "Open Sans",
            fontSize: "1.75em",
          }}
          className="f1 fw6 pa0 ma0 tc-ns lh-headline"
        >
          {post.frontmatter.title}
        </h1>
        <p style={{ fontFamily: "Open Sans" }} className="pv3 tc-ns black-60">
          {post.frontmatter.date} • {this.getReadingTime()} min read
        </p>
        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "1.1em",
          }}
          className="lh-copy"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        {this.renderFooter()}
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
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
