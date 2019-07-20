import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const SectionHeader = ({ children, text }) => (
  <div className="pv4 tc">
    <p style={{ fontFamily: "Montserrat" }} className="f3-ns f4 fw5">
      {text}
    </p>
    {children}
  </div>
)

const SectionLinks = ({ items }) => (
  <div>
    {items.map((item, i) => (
      <div key={i} className="pv1">
        <OutboundLink
          href={item.link}
          style={{
            fontFamily: "Open Sans",
            textDecoration: "none",
            boxShadow: "none",
          }}
          className="f4 grow pointer tc link dim fw6"
        >
          {item.text}
        </OutboundLink>
      </div>
    ))}
  </div>
)

export default class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About me" />
        <div>
          <SectionHeader
            text="I am passionate about building products and organizations that
            enrich the lives of others"
          />
          <p
            style={{ fontFamily: "Montserrat" }}
            className="lh-copy fw4 f5 f4-ns tc"
          >
            This blog serves as a platform for me to share what I'm thinking
            about, explore my curiosities and reflect on what I've learned.
          </p>

          <SectionHeader text="Find me elsewhere around the internet">
            <SectionLinks
              items={[
                {
                  link: "https://www.linkedin.com/in/itracey/",
                  text: "Linkedin",
                },
                { link: "https://twitter.com/ianrtracey", text: "Twitter" },
              ]}
            />
          </SectionHeader>
          {/* 
          <SectionHeader text="Popular posts to get started with">
            <div className="list">
              <div>Impostor</div>
            </div>
          </SectionHeader> */}
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
