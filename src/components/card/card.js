import * as React from "react"
import "./card.scss"
import { StaticImage } from "gatsby-plugin-image"

const Card = () => (
    <div className="card">
        <div className="light">
            <StaticImage
                src="../../images/poster.jpg"
                loading="eager"
                width={450}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
            />
            <h3>Lorem ipsum</h3>
        </div>
        <div style={{ 
            marginTop: '8px',
            fontSize: 'var(--font-sm)'
        }}>
            <span>
            </span>
            <time className="" datetime="" style={{textTransform: 'uppercase', fontWeight: 700}}>Published 6 days</time>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
    </div>
)

export default Card
