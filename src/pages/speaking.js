import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const data = [
  {
    title: "What is Hacker Culture?",
    event: "Hack Arizona 2019 Keynote Address",
    date: "January 2019",
    location: "Tucson, AZ",
    watchLink: "https://youtu.be/bBXhoFhyYZc?t=937",
  },
  {
    title: "Intro to GraphQL: The Future Language of the Web",
    event: "SXSW",
    date: "March 2018",
    location: "Austin, TX",
    infoLink: "https://schedule.sxsw.com/2018/events/PP100117",
  },
  {
    title: "How Hackathons Transform Students",
    event: "SXSW",
    date: "March 2017",
    location: "Austin, TX",
    infoLink: "https://schedule.sxsw.com/2017/events/PP96590",
  },
  {
    title: "Why Are We Here?",
    event: "Hack Arizona 2017 Opening Remarks",
    date: "January 2017",
    location: "Tucson, AZ",
    watchLink: "https://www.facebook.com/hackarizona/videos/1836837809889342",
  },
  {
    title: "2x: Scaling a Hackathon",
    event: "Hack Arizona 2017 Opening Remarks",
    date: "January 2016",
    location: "Tucson, AZ",
    watchLink: "https://www.youtube.com/watch?v=Yx2FXkyySqk",
  },
]

const TalkLink = ({ talk }) => {
  let text = null
  let link = null
  if (talk.infoLink) {
    text = "Learn more→"
    link = talk.infoLink
  } else if (talk.watchLink) {
    text = "Watch→"
    link = talk.watchLink
  } else {
    return null
  }
  return (
    <OutboundLink
      style={{ textDecoration: "none", boxShadow: "none" }}
      href={link}
      className="fr fw6 pointer grow link"
    >
      {text}
    </OutboundLink>
  )
}
const TalkList = () => (
  <div className="mt5 mb5">
    <div style={{ fontFamily: "Open Sans" }}>
      {data.map(event => (
        <div className="mt5">
          <div className="f3 fw7 lh-title black-80">{event.title}</div>
          <div className="lh-title f5 fw7">{event.event}</div>
          <div className="lh-copy f5 fw4">{event.date}</div>
          <div className="lh-copy f5 fw4">{event.location}</div>
          <TalkLink talk={event} />
        </div>
      ))}
    </div>
  </div>
)

export default class SpeakingPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Speaking" />
        <div className="tv4 tc" style={{ fontFamily: "Montserrat" }}>
          <p className="f3-ns f4 fw5 tc">I occasionally give talks</p>
        </div>
        <div>
          <TalkList />
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
