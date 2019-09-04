import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <SEO title="Form Success" />
    <div className="contactPage">
      <h1>Contact Success!</h1>
      <p>
        thanks for filling out my form! I'll get back to you ASAP!
      </p>
      
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Success
