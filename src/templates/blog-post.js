import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import SubscriptionFrom from "../components/subscriptionForm"
import { getSubscribed } from "../utils/storage"
import { readingTimeInMinutes } from "../utils/reading"

class BlogPostTemplate extends React.Component {
  renderFooter() {
    const { previous, next } = this.props.pageContext
    const subscriptionSection = (
      <div>
        <p
          style={{ fontFamily: "Open Sans" }}
          className="f3 fw7 mt4 mb0 pb2 black-70"
        >
          Stay updated
        </p>
        <SubscriptionFrom />
      </div>
    )

    const relatedPosts = [previous, next].filter(x => x != null)
    const relatedPostsSection = (
      <div>
        <p style={{ fontFamily: "Open Sans" }} className="f3 fw6 mt5">
          Other popular posts
        </p>
        <div className="tc">
          {relatedPosts.map(post => (
            <p className="f5 fw4 pv3 ma0 pb1 black link dim">
              <Link to={post.fields.slug} style={{ boxShadow: `none` }}>
                {post.frontmatter.title}
              </Link>
            </p>
          ))}
        </div>
      </div>
    )

    return (
      <div className="pv4 tc">
        <Bio />
        {!getSubscribed() && subscriptionSection}
      </div>
    )
  }

  getReadingTime = () => {
    const post = this.props.data.markdownRemark
    return readingTimeInMinutes(post.html)
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Link
          style={{ boxShadow: "none", textDecoration: "none" }}
          class="f4 br-pill ph3 pv2 mb2 dib b--black black fw5 ba bg-transparent mb4"
          to="/"
        >
          ←
        </Link>
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
          {post.frontmatter.date} • {this.getReadingTime()} min read
        </p>
        <div
          style={{
            fontFamily: "Montserrat",
          }}
          className="lh-copy fw4 f4-ns f5"
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
      }
    }
  }
`
