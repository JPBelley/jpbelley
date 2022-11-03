import React, { useState } from "react"
import ThreeSphere from "../three/sphere"

const Hero = () => {
    return (
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
                <div className="column" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>Here's my<br />code hub!</h1>
                    <p style={{ maxWidth: '350px' }}>This is a place where I teach coding, share experiments and my thoughts.</p>
                </div>

                <div className="column">
                    <ThreeSphere />
                </div>
            </div>
        </section>
    )
}

export default Hero
