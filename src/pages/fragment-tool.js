import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/layout/section/section"
import ShaderVisualizerTool from '../components/three/shaderVisualizerTool'
import ShaderControls from '../components/fragment-tool/pane'

const FragmentTool = () => {
    const threeContainer = useRef(0);
    const container = useRef(0);
    const [scene, setScene] = useState({wireframe: true})
    const [attributes, setAttributes] = useState({
        red: 1.0,
        green: 1.0,
        blue: 1.0
    });
    const [code, setCode] = useState(`
        uniform float red;
        uniform float green;
        uniform float blue;
        // uniform float time;
        // varying vec2 vUv;

        void main() {
            // vec2 p = vUv;
            // float r = sin(time) * red * p.x; 
            gl_FragColor = vec4(red, green, blue, 1.0);
        }`
    );

    useEffect(() => {
        ShaderControls({ container: container.current, setScene, attributes, setAttributes});
    }, []);

    return (
        <Layout>
            <Link to="/" style={{ display: 'block', paddingTop: '15px' }}>Home</Link>
            <Section>
                <div style={{
                        position: 'relative'
                    }}
                    ref={container}
                >
                    <h1 className="typo-h0 text-center" style={{ marginTop: '-75px' }}>Fragment</h1>
                    <pre style={{
                        marginTop: "40vh",
                        marginRight: "auto",
                        marginLeft: "auto",
                        maxWidth: "1000px"
                    }}>
                        <code>
                            {`
                                void main() {
                                    gl_FragColor = vec4(${attributes.red.toFixed(2)}, ${attributes.green.toFixed(2)}, ${attributes.blue.toFixed(2)}, 1.0);
                                }
                            `}
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
                        <ShaderVisualizerTool
                            fragment={code}
                            threeContainer={threeContainer}
                            scene={scene}
                            attributes={attributes}
                        />
                    </div>
                </div>
            </Section>

        </Layout>
    )
}

export const Head = () => <Seo title="Fragment Shader Tool" />

export default FragmentTool
