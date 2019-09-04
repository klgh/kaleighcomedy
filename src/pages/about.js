import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = props => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <div class="col hpBio">
      <p>
        Kaleigh is an Atlanta native who works by day as a web developer at a
        consulting firm. She enjoys kayaking on the Chattahoochee River and
        hiking with her husband and 2 dogs.
      </p>
      <p>
        Kaleigh has been performing standup in Atlanta since 2016, appearing in
        various places such as Laughing Skull Lounge, The Punchline, Highwire
        Comedy, 420 Comedy Hour, Java Monkey, and more. She has taken the intro
        &amp; advanced Joel Byars Comedy Class and Online Writing Satire for the
        Internet with The Second City. In 2018 she began taking improv classes
        at Highwire Comedy.{" "}
      </p>{" "}
      <p>
        Kaleigh placed 2nd in The Punchline’s Sunday Night Comedy Festival -Feb
        2017
      </p>
    </div>
    <div className="col image">
      <Img fluid={props.data.sass.childImageSharp.fluid} />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

export const pageQuery = graphql`
  query {
    sass: file(relativePath: { eq: "sass.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
