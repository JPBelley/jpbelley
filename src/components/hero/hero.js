import * as React from "react"
import ThreeSphere from "../three/sphere"

const Hero = () => (
    <section
        className="dark"
        style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            minHeight: '100vh'
        }}
    >
        <div className="columns columns-2">
            <div className="column">
                <h1>Here's my<br />code hub!</h1>
                <p style={{ maxWidth: '350px' }}>This is a place I created to share my experiment, my thoughts and teach about coding.</p>
            </div>

            <div className="column">
                <ThreeSphere />
            </div>
        </div>
    </section>
)

export default Hero
