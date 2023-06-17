import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Hero from "../components/home/hero"
import Card from "../components/card/card"
import Seo from "../components/seo"
import MailchimpSignup from "../components/mailchimp/mailchimp"
import AnimateText from '../utils/animate-text'
// import * as styles from "../components/index.module.css"
import { useStaticQuery, graphql } from "gatsby"


const IndexPage = () => {
  const fragments = useStaticQuery(graphql`
      query MyQuery {
        allMongodbJpbelleyFragments(limit: 3, sort: {mongodb_id: ASC}) {
          totalCount
          edges {
            node {
              id
              slug
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
              <p>I am thrilled to announce that I am currently crafting a comprehensive course, designed to empower individuals with the knowledge and skills to code their very own website. The course is progressing smoothly, but for those eager to delve in, a beta version is currently open for enrollment. I have also created a <a href="https://discord.gg/2A9ww4gDTT" target="_blank" rel="noreferrer">Discord</a> channel for any inquiries or feedback related to the course, providing a community for learning and growth. Join me in this exciting journey of web development!</p>
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
        <section className="section section-lg dark" style={{ margin: '300px auto' }}>
          <div>
            <h2 className="text-center typo-h0"><AnimateText animationType="heading">Fragment Shaders</AnimateText></h2>
            <p className="text-center mx-auto"><AnimateText animationType="paragraph">As I delve deeper into the world of creative coding, the endless possibilities of fragment shaders never cease to amaze me, constantly inspiring my imagination. Over the years, I've come across some fragment shaders that have caught my attention and made a note of them for future reference, highlighting their potential to fuel my creativity. Feel free to explore them as well and discover their potential for your own creative endeavors.</AnimateText></p>
            <div 
              className="columns columns-3 small-gap"
              style={{marginTop: '70px'}}
            >
              {fragments.allMongodbJpbelleyFragments.edges.map((fragment, index) => 
                <div 
                  className="column"
                  key={`fragment-${index}`}
                >
                  <Card 
                    title={fragment.node.name}
                    link={`/fragment/${fragment.node.slug}`}
                    fragment={fragment.node.code}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Vertex Shaders */}
        {/* <section className="section section-lg dark" style={{ margin: '300px auto' }}>
          <div>
            <h2 className="text-center typo-h0" style={{ maxWidth: '1200px', margin: '0 auto'}}><AnimateText animationType="heading">Vertex Shaders</AnimateText></h2>
            <p className="text-center mx-auto"><AnimateText animationType="paragraph">As I delve deeper into the world of creative coding, the endless possibilities of fragment shaders never cease to amaze me, constantly inspiring my imagination. Over the years, I've come across some fragment shaders that have caught my attention and made a note of them for future reference, highlighting their potential to fuel my creativity. Feel free to explore them as well and discover their potential for your own creative endeavors.</AnimateText></p>
            <div 
              className="columns columns-3 small-gap"
              style={{marginTop: '70px'}}
            >
              {fragments.allMongodbJpbelleyFragments.edges.map((fragment, index) => 
                <div 
                  className="column"
                  key={`fragment-${index}`}
                >
                  <Card 
                    title={fragment.node.name}
                    link={`/fragment/${fragment.node.slug}`}
                    // fragment={fragment.node.code}
                    vertex={`  
                      uniform float time;

                      void main() {
                        // Example: Displace vertices based on time
                        vec3 displacedPosition = position + vec3(sin(time), cos(time), 0.0);

                        gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
                      }`}
                  />
                </div>
              )}
            </div>
          </div>
        </section> */}

        {/* About */}
        <section className="section section-lg dark" style={{margin: '300px auto'}}>
          <div className="text-center">
            <h2 className="typo-h0 mx-auto" style={{maxWidth: '950px'}}><AnimateText animationType="heading">About myself</AnimateText></h2>
            <p style={{ margin: '0 auto' }}>
              <AnimateText animationType="paragraph">As a front-end developer, my passion for code goes beyond just improving my skills. I am driven by the desire to share my discoveries and teach others through my work. This website is a reflection of that passion and a platform for learning and exchange of ideas about coding. My name is JP, and I welcome you to join me in this journey.</AnimateText>
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
