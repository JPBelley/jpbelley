import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Hero from "../components/hero/hero"
import Card from "../components/card/card"
import Seo from "../components/seo"
import MailchimpSignup from "../components/mailchimp/mailchimp"
import * as styles from "../components/index.module.css"
import { useStaticQuery, graphql } from "gatsby"

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
]

const IndexPage = () => {
  const fragments = useStaticQuery(graphql`
      query MyQuery {
        allMongodbJpbelleyFragments(limit: 3) {
          totalCount
          edges {
            node {
              id
              name
              code
            }
          }
        }
      }
  `)

  return (
    <Layout>
      {/* <Seo title="Home" /> */}
      <div>
        <Hero />

        {/* Product */}
        <section className="section light">
          <div className="columns columns-2 small-gap">
            <div className="column">
              <h2>Want to learn coding?</h2>
              <p>Allow me to guide you on a journey of discovery and development, as we explore the intricacies of web creation together.</p>
              <p>I am thrilled to announce that I am currently crafting a comprehensive course, designed to empower individuals with the knowledge and skills to code their very own website. The course is progressing smoothly, but for those eager to delve in, a beta version is currently open for enrollment. I have also created a <a href="https://discord.gg/2A9ww4gDTT" target="_blank">Discord</a> channel for any inquiries or feedback related to the course, providing a community for learning and growth. Join me in this exciting journey of web development!</p>
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

        {/* Course */}
        {/* <section className="section section-lg dark">
          <div className="text-center">
            <h2>The course</h2>
            <p style={{ margin: '0 auto' }}></p>
          </div>
        </section> */}

        {/* Fragment Shaders */}
        <section className="section section-lg dark">
          <div>
            <h2 className="text-center">Fragment Shaders</h2>
            <p className="text-center mx-auto">As I delve deeper into the world of creative coding, the endless possibilities of fragment shaders never cease to amaze me, constantly inspiring my imagination. Over the years, I've come across some fragment shaders that have caught my attention and made a note of them for future reference, highlighting their potential to fuel my creativity. Feel free to explore them as well and discover their potential for your own creative endeavors.</p>
            <div 
              className="columns columns-3 small-gap"
              style={{marginTop: '70px'}}
            >
              <div className="column">
                <Card 
                  title="Fragment Shader #1"
                  // date="29/01/2023"
                  fragment={`
                    uniform float time;
                    varying vec2 vUv;

                    void main() {
                        vec2 p = vUv;
                        float c = cos(time);
                        float s = sin(time);
                        vec2 newUV = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
                        vec3 color = vec3(newUV, 0.95 + 0.1 * sin(time + length(p)));
                        gl_FragColor = vec4(color, 1.0);
                    }
                  `}
                />
              </div>
              <div className="column">
                <Card 
                  title="Fragment Shader #2"
                  // date="03/02/2023"
                  fragment={`
                    precision mediump float;

                    uniform float time;
                    varying vec2 vUv;

                    void main() {
                      vec2 p = vUv;
                      float c = cos(time * 5.0);
                      float s = sin(time * 5.0);
                      vec2 newUV = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
                      vec3 color = vec3(0.0);
                      color.r = 0.95 + 0.1 * sin(time + length(newUV));
                      color.g = 0.95 + 0.1 * cos(time + length(p));
                      color.b = 0.95 + 0.1 * sin(time + length(newUV) + length(p));
                      color = mix(color, vec3(1.0, 0.0, 1.0), 0.5 * sin(time * 1.0));
                      color = mix(color, vec3(0.0, 1.0, 0.0), 0.5 * cos(time * 1.0));
                      gl_FragColor = vec4(color, 1.0);
                    }
                  `}
                />
              </div>

              <div className="column">
                <Card 
                  title="Fragment Shader #3"
                  // date="20/02/2023"
                  fragment={`
                    precision mediump float;

                    uniform float time;
                    varying vec2 vUv;

                    void main() {
                      vec2 p = vUv;
                      float c = cos(time);
                      float s = sin(time);
                      vec2 newUV = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
                      vec3 color = vec3(newUV, 0.95 + 0.1 * sin(time + length(p)));
                      color += vec3(sin(p.x * 10.0 + time), cos(p.y * 10.0 + time), 0.0) * 0.1;
                      color = mix(color, vec3(1.0), step(sin(time * 20.0), 0.5));
                      color = mix(color, vec3(0.0), step(sin(time * 40.0), 0.5));
                      gl_FragColor = vec4(color, 1.0);
                    }`
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section section-lg dark">
          <div className="text-center">
            <h2>About myself</h2>
            <p style={{ margin: '0 auto' }}>
              As a front-end developer, my passion for code goes beyond just improving my skills. I am driven by the desire to share my discoveries and teach others through my work. This website is a reflection of that passion and a platform for learning and exchange of ideas about coding. My name is JP, and I welcome you to join me in this journey.
            </p>
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
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="JPBelley" />

export default IndexPage
