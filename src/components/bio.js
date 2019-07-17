/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <p className="f3 fw6">About Me</p>
      <p>
        Hey, I'm Ian. I live and work in San Francisco where I'm focused on
        building things and growing businesses.
        {` `}
        <a
          style={{ textDecoration: "none", boxShadow: "none" }}
          href={`https://twitter.com/${social.twitter}`}
        >
          You should follow me on Twitter
        </a>
      </p>
    </div>
  )
}

export default Bio
