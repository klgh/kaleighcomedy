import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contactPage">
      <h1>Contact</h1>
      <p>
        For booking info email:{" "}
        <a
          href="mailto:kaleighcomedy@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          kaleighcomedy@gmail.com
        </a>
      </p>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
