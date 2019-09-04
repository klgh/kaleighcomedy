import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Media = () => (
  <Layout>
    <SEO title="Media" />
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Media</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/2k18RNp2AnY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="kaleighcomedy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>
            <a
              href="https://www.youtube.com/channel/UC8y5lZUKVafYMVgPNLYHJLg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Me on YouTube!
            </a>
          </h4>
        </div>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Media
