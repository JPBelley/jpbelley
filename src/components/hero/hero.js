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
                    <h1>Welcome to<br />my code hub!</h1>
                    {/* Unlock the doors to endless coding possibilities with my hub! */}
                    {/* Step into the world of code with my one-stop hub! */}
                    {/* Unlock your coding potential with my all-in-one hub! */}
                    <p style={{ maxWidth: '350px' }}>This is a place where I share teachings, showcase experiments, and express my insights on the tech industry.</p>
                </div>

                <div className="column">
                    <ThreeSphere />
                </div>
            </div>
        </section>
    )
}

export default Hero
