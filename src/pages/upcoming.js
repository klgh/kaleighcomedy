import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Upcoming = props => (
  <Layout>
    <SEO title="Upcoming Dates" />
    <div className="upcoming">
      <div className="twentytwenty">
        <h1>Upcoming Dates</h1>
        <p>no upcoming dates due to 2020</p>
      </div>
      <div className="photos">
        <div className="pic">
          <Img fluid={props.data.funnymonkey.childImageSharp.fluid} />
        </div>
        <div className="pic">
          <Img fluid={props.data.punchline.childImageSharp.fluid} />
        </div>
      </div>
      {/* <div className="past">
        <h1>Past</h1>
        <div className="nineteen">
          <h2>2019</h2>
          <p>Feb 15 - Standup vs Improv</p>
        </div>
        <div className="eightteen">
          <h2>2018</h2>
          <p>January 25 - Gilly’s Showcase</p>
          <p>January 24 - Fire &amp; Brimstone</p>
        </div>
        <div className="seventeen">
          <h2>2017</h2>
          <p>
            November 7 –{" "}
            <a
              href="https://www.rljproductions.com/previous-events/"
              target="_blank"
              rel="noreferrer"
            >
              Crafty Hog Comedy Show
            </a>
          </p>
          <p>November 1 – Fire &amp; Brimstone </p>
          <p>July 11 - Fire &amp; Brimstone</p>
          <p>July 5 – Laughing Skull</p>
          <p>June 20 – Fire &amp; Brimstone</p>
          <p>May 17 – Laughing Skull</p>
          <p>May 9 – Fire &amp; Brimstone</p>
          <p>April 13 – Sweetwater Bar & Grill</p>
          <p>March 26- Highwire Comedy</p>
          <p>March 22- Improv R&amp;D</p>
          <p>March 15- Java Monkey</p>
          <p>March 11- 420 Show</p>
          <p>March 9 - Sweetwater Bar &amp; Grill</p>
          <p>
            Feb 26 - The Punchline: Sunday Night Comedy Fest Finals (2nd place)
          </p>
          <p>Feb 21 - Fire &amp; Brimstone: Clash of the Comics</p>
          <p>Feb 19 - The Punchline: Sunday Night Comedy Fest (3rd place)</p>
          <p>Feb 16 - Sweetwater Bar & Grill</p>
          <p>Jan 31 - Fire & Brimstone</p>
        </div>
        <div className="sixteen">
          <h2>2016</h2>
          <p>November 21 - Laughing Skull</p>
          <p>November 15 - Fire & Brimstone</p>
          <p>October 30 - Highwire Comedy</p>
          <p>October 26 - Java Monkey</p>
          <p>October 15 - 420 Show</p>
        </div>
      </div> */}
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Upcoming

export const pageQuery = graphql`
  query {
    funnymonkey: file(relativePath: { eq: "funnymonkey.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    punchline: file(relativePath: { eq: "punchline.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
