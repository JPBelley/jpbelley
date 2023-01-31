import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DSSection = ({children}) => {
    return ( 
        <section
            className="section" 
            style={{ paddingTop: 0 }}
        >
            <div>
                {children}
            </div>
        </section>
    )
}

const DSPage = () => (
    <Layout>
        <section
            className="section"
            style={{padding: 0}}
        >
            <div>
                <Link to="/">JP</Link>
                <h1 style={{
                    borderBottom: '1px solid #fff',
                    padding: '50px 0'
                }}>Design System</h1>
            </div>
        </section>
        <DSSection>
            <h1>This is a H1</h1>
            <h2>This is a H2</h2>
            <h3>This is a H3</h3>
            <h4>This is a H4</h4>
            <h5>This is a H5</h5>
            <h6>This is a H6</h6>
            <p>This is a p</p>
        </DSSection>
    </Layout>
)

export const Head = () => <Seo title="Page two" />

export default DSPage
