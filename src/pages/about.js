import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About</h1>
    <div class="col hpBio">
      <p>
        Kaleigh is an Atlanta native who has been working in the technology
        field since graduating from Georgia Southern University with a BS. She
        also has a masters in Internet Technology from the University of
        Georgia. She enjoys kayaking on the Chattahoochee River, Biking,
        Brazilian Jiu-Jitsu, and Hiking with her husband and dog.
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
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
