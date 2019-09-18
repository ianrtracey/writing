import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Title = ({ children, text }) => (
  <div className="pv4">
    <p style={{ fontFamily: "Montserrat" }} className="f2-ns f3 fw5">
      {text}
    </p>
    {children}
  </div>
)

const Section = ({ children, text }) => (
  <div className="pv4">
    <p style={{ fontFamily: "Montserrat" }} className="f3-ns f4 fw5">
      {text}
    </p>
    {children}
  </div>
)

const Subheading = ({ children }) => (
  <p style={{ fontFamily: "Montserrat" }} className="lh-title fw4 f4 f3-ns">
    {children}
  </p>
)

const Text = ({ children }) => (
  <p
    style={{ fontFamily: "Montserrat", fontSize: "1.10em" }}
    className="lh-copy"
  >
    {children}
  </p>
)

const Question = ({ children }) => (
  <p style={{ fontFamily: "Montserrat", fontSize: "1em" }} className="fw6">
    {children}
  </p>
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
export default class DeathDinner extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Host Your Own Death Dinner" />
        <div>
          <Title text="Host Your Own Death Dinner">
            <Subheading>
              This serves as a basic guide and outline for hosting your own
              death dinner. Adapted from the guides found at
              <OutboundLink
                href={"https://deathoverdinner.org"}
                style={{
                  fontFamily: "Open Sans",
                  textDecoration: "none",
                  boxShadow: "none",
                }}
                className="f4 grow pointer link dim fw6"
              >
                {" Death over Dinner"}
              </OutboundLink>
              .
            </Subheading>
          </Title>

          <Section text="Requirements">
            <Text>Dinner</Text>
            <Text>A comfortable and private environment</Text>
            <Text>A candle for each participant</Text>
          </Section>

          <Section text="Opener">
            <Text>
              "Let's Have Dinner and Talk About Death" has rapidly inspired a
              growing global community of people to talk about an
              often-not-discussed topic: death and dying. From physicians, to
              athletes, to tech executives, and many more- death dinners are
              being used to pull back the veil on the most important and costly
              conversation the world isn’t having.
            </Text>
            <Text>
              Death, consciousness and the state of Being are some of the most
              important topics that we avoid talking about. I recently stumbled
              across the work of a group of leading psychologists,
              neuroscientists and physicists who are working to break the taboo
              around the conversations about existence and dying.
            </Text>
            <Text>
              This is not meant to be a morbid or politically correct
              conversation but a human one.
            </Text>
          </Section>

          <Section text="Phase I - Honoring Your Lost Ones">
            <Text>
              To start the evening, let’s bring a sense of gratitude to the
              table and acknowledge those who have gone on before us. Let’s do a
              quick around the table introduction, to be completed with a “raise
              of the glass” to someone who is no longer with us, who impacted
              your life in some way or you admire deeply. In no more than twenty
              words, share why you admire them. If you would prefer to light a
              candle in their honor, we have found that to be meaningful as
              well, some people do both.
            </Text>
          </Section>

          <Section text="Phase II - Exploring Death">
            <Text>
              We’ll now go around the table, allowing everyone time to answer.
              Each person will describe their experience and follow up questions
              can be made but no sharing of personal anecdotes until it’s your
              turn.
            </Text>
            <Text>Ask the following questions (or a subset): </Text>
            <Question>For what do you want to be remembered? </Question>
            <Question>
              What would you want your final 30 days to look like?
            </Question>
            <Question>
              If you knew you were going to die soon and had only one phone call
              to make, who would you call and what would you say? And why are
              you waiting?
            </Question>
            <Question>
              How do you know when you are feeling grief? Can you describe the
              feeling to someone that has never felt?
            </Question>
            <Question>Do you feel frightened or at peace? Why?</Question>
          </Section>

          <Section text="Phase III - Your Death">
            <Text>
              We’ll now go around the table, allowing everyone time to answer.
              Each person will describe their experience and follow up questions
              can be made but no sharing of personal anecdotes until it’s your
              turn.
            </Text>
            <Question>How you want your own life to end?</Question>
            <Question>
              Imagine you had a crystal ball and could watch the future day of
              your death, what do you think you would see, hour by hour until
              your death?
            </Question>
            <Question>
              How might you feel during your final hours? Minutes? Who is around
              you?
            </Question>
            <Question>
              How you would like to support the end-of-life wishes of those you
              love and care about?
            </Question>
          </Section>

          <Section text="Phase IV - Silence">
            <Text>
              To end the dinner, we will conduct “the Pause” and a round of
              appreciation. “The Pause” is a shared moment to remember ourselves
              inside the expanse of our existence, of our consciousness and the
              love in our life.
            </Text>
            <Text>
              Here is a suggested script to introduce the pause: “Let us take a
              moment to Pause and honor all the persons we have cared for who
              died. Each of them was someone who loved and was loved; someone’s
              family member, friend or lover.
            </Text>
            <Question>Take a 1-2 minutes moment of silence</Question>
          </Section>

          <Section text="Phase V - Appreciation">
            <Text>
              The round of appreciation completes the conversation and the
              dinner. Someone begins by selecting a person on their left and
              right, and sharing one thing they admire about that person. The
              person who is appreciated can only say, “thank you”, and the
              circle continues until everyone has been admired once. If you just
              met the person beside you tonight, find something during the
              dinner that stuck you about them that you can reflect back to
              them.
            </Text>
            <Text>
              We suggest that after the appreciation you break from the table
              and do whatever calls you, whether you look up at the vastness of
              the sky or lounge on a couch to digest it all, anything that
              further sinks you into the connections and awareness that you
              experienced at the table. Tonight is your night.
            </Text>
          </Section>
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
