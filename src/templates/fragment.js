import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/layout/section/section"
import FragmentShaderVisualizer from '../components/three/fragmentShaderVisualizer'

const Fragment = ({ pageContext }) => {
  const { code } = pageContext.fragment;

  return (
    <Layout>
      <div style={{position: "relative"}}>
        <Section>
            <h1 className="typo-h0 text-center">Fragment</h1>
            <pre style={{
              // position: 'relative',
              marginTop: "40vh"
            }}>
              <code>
                {code}
              </code>
            </pre>
        </Section>
        <div
          className="absolute-full"
        >
          <FragmentShaderVisualizer
            fragment={code}
          />
        </div>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Fragment Shader" />

export default Fragment
