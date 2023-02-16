import * as React from "react"
import "./card.scss"
// import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import FragmentShaderVisualizer from '../three/fragmentShaderVisualizer'

const Card = (props) => {
    const { 
        title, 
        date,
        description,
        fragment,
        link
    } = props;

    return (
        <Link 
            to={link} 
            className="card"
        >
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
        </Link>
    )
}

export default Card
