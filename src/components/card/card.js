import * as React from "react"
import "./card.scss"
import { StaticImage } from "gatsby-plugin-image"
import FragmentShaderVisualizer from './cardHero/fragment'

const Card = (props) => {
    const { 
        title, 
        date,
        description,
        fragment
    } = props;

    return (
        <div className="card">
            <div className="light">
                {/* <StaticImage
                    src="../../images/poster.jpg"
                    loading="eager"
                    width={450}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    
                /> */}
                <FragmentShaderVisualizer 
                    fragment={fragment}
                />
                {title && <h3
                    style={{ marginTop: `var(--space-3)` }}
                    >{title}
                </h3>}
            </div>
            <div style={{ 
                marginTop: '8px',
                fontSize: 'var(--font-sm)'
            }}>
                <span>
                </span>
                {date && <time className="" dateTime="" style={{textTransform: 'uppercase', fontWeight: 700}}>{date}</time>}
            </div>
            {description && <p>{description}</p>}
        </div>
    )
}

export default Card
