import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Hero from "../components/hero/hero"
import Card from "../components/card/card"
import Seo from "../components/seo"
import MailchimpSignup from "../components/mailchimp/mailchimp"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Learn now",
    url: "page-2",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const IndexPage = () => (
  <Layout>
    {/* <Seo title="Home" /> */}
    <div>
      <Hero />

      {/* Product */}
      <section className="section light">
        <div className="columns columns-2 small-gap">
          <div className="column">
            <h2>You want to learn<br />how to code?</h2>
            <p style={{ maxWidth: '350px' }}>I'm working on a course so you can learn how to code your own website. The full course is progressing well and should be ready soon. However, you can try the beta version today by <em>signing up</em> to the course! 
              I also created a <a href="https://discord.gg/HrQk97nW" target="_blank">Discord channel</a> for any questions or feedback related to the course.</p>
            {/* <Link className="button button-outline" to="page-2">Learn now</Link> */}
            <MailchimpSignup  />
          </div>

          <div className="column">
            <StaticImage
              src="../images/product.jpg"
              loading="eager"
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ 
                marginBottom: `var(--space-3)`,
                borderRadius: `var(--border-radius-md)`
              }}
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section section-lg dark">
        <div className="text-center">
          <h2>The course</h2>
          <p style={{ margin: '0 auto' }}></p>
        </div>
      </section>

      {/* About */}
      <section className="section section-lg dark">
        <div className="text-center">
          <h2>About myself</h2>
          <p style={{ margin: '0 auto' }}>My name is JP, I'm a front end developer who's passionate about code. Not only do I like spending my time perfecting my skills, but I also love teaching it and share my discoveries. This is why I built this website. So if you wanna learn and share thoughts about coding, welcome home!</p>
        </div>
      </section>

      {/* Blog */}
      {/* <section className="section section-lg dark">
        <div>
          <h2 className="text-center">Lastest thoughts</h2>
          <div className="columns columns-3 small-gap">
            <div className="column">
              <Card />
            </div>

            <div className="column">
              <Card />
            </div>

            <div className="column">
              <Card />
            </div>
          </div>
        </div>
      </section> */}

    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
