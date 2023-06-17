import React, { useRef } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/layout/section/section"
import ShaderVisualizer from '../components/three/ShaderVisualizer'

const Fragment = ({ pageContext }) => {
  const { code } = pageContext.fragment;
  const threeContainer = useRef(0);

  return (
    <Layout>
      <Link to="/" style={{display: 'block', paddingTop: '15px'}}>Home</Link>
      <Section>
          <div style={{
            position: 'relative'
          }}>
          <h1 className="typo-h0 text-center" style={{ marginTop: '-75px' }}>Fragment</h1>
            <pre style={{
              marginTop: "40vh",
              marginRight: "auto",
              marginLeft: "auto",
              maxWidth: "1000px"
            }}>
              <code>
                {code}
              </code>
            </pre>
            <div
              className="absolute-full"
              ref={threeContainer}
              style={{
                top: '-75px',
                zIndex: -1
              }}
            >
              <ShaderVisualizer
                fragment={code}
                threeContainer={threeContainer}
              />
            </div>
        </div>
      </Section>

    </Layout>
  )
}

export const Head = () => <Seo title="Fragment Shader" />

export default Fragment
