/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ReactLenis } from '@studio-freight/react-lenis'

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const options = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    orientation: 'horizontal', // vertical, horizontal
    gestureOrientation: 'horizontal', // vertical, horizontal, both
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: true,
  };

  return (
    <>
      <ReactLenis root options={{ ...options }}>
        {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
        <div
          style={{
            margin: `0 auto`,
            padding: `0 var(--size-gutter)`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              margin: `var(--space-5) 0`,
              fontSize: `var(--font-sm)`,
            }}
          >
            © {new Date().getFullYear()} &middot; JPBelley
          </footer>
        </div>
      </ReactLenis>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
