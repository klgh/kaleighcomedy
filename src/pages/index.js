import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

const IndexPage = () => (
  <Layout>
    <SEO title="Kaleigh Scruggs | atlanta comedy" />
    <div class="container">
      <div class="row mainBody">
        <div class="col">
          <Image />
        </div>
        <div class="col hpBio">
          <p>
            Kaleigh is an Atlanta native who works by day as a web developer at
            a consulting firm. She enjoys kayaking on the Chattahoochee River
            and hiking with her husband and 2 dogs.
          </p>
          <p>
            Kaleigh has been performing standup in Atlanta since 2016, appearing
            in various places such as Laughing Skull Lounge, The Punchline,
            Highwire Comedy, 420 Comedy Hour, Java Monkey, and more. She has
            taken the intro &amp; advanced Joel Byars Comedy Class and Online
            Writing Satire for the Internet with The Second City. In 2018 she
            began taking improv classes at Highwire Comedy.{" "}
          </p>{" "}
          <p>
            Kaleigh placed 2nd in The Punchline’s Sunday Night Comedy Festival
            -Feb 2017
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          {" "}
          <div class="connect">
            <div class="faIcons">
              <a
                href="https://www.youtube.com/channel/UC8y5lZUKVafYMVgPNLYHJLg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  title="kaleigh's youtube"
                  icon={["fab", "youtube"]}
                />
              </a>{" "}
              <a
                href="https://twitter.com/kaleighscruggs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  title="kaleigh's twitter"
                  icon={["fab", "twitter"]}
                />
              </a>{" "}
              <a
                href="https://www.instagram.com/klgh.js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  title="kaleigh's instagram"
                  icon={["fab", "instagram"]}
                />
              </a>{" "}
              <a
                href="https://www.facebook.com/kleach"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  title="kaleigh's facebook"
                  icon={["fab", "facebook"]}
                />
              </a>{" "}
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
