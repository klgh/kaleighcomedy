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
      <p className="contactForm">
        or fill out the form below!
        <form name="contact" method="POST" data-netlify="true" action="/success">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </p>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
