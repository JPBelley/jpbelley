import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/layout/section/section"
import ShaderVisualizerTool from '../components/three/shaderVisualizerTool'
import { Pane } from 'tweakpane';

const FragmentTool = () => {
    const threeContainer = useRef(0);
    const container = useRef(0);
    const [scene, setScene] = useState({wireframe: true})
    const [red, setRed] = useState(1.0)
    const [green, setGreen] = useState(1.0)
    const [blue, setBlue] = useState(1.0)
    const [code, setCode] = useState(`
        uniform float red;
        uniform float green;
        uniform float blue;

        void main() {
            gl_FragColor = vec4(red,green, blue, 1.0);
        }`
    );
    const PARAMS = {
        wireframe: true,
        color: { r: 255, g: 255, b: 255 },
    };

    useEffect(() => {
        const pane = new Pane({ container: container.current });
        const wireframe = pane.addInput(PARAMS, 'wireframe');
        const input = pane.addInput(PARAMS, 'color', {
            view: 'color',
        });

        input.on('change', function (ev) {
            setRed(ev.value.r/255);
            setGreen(ev.value.g/255);
            setBlue(ev.value.b/255);
        });

        wireframe.on('change', (ev) => setScene({wireframe: ev.value}));

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
                                    gl_FragColor = vec4(${red.toFixed(2)}, ${green.toFixed(2)}, ${blue.toFixed(2)}, 1.0);
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
                            red={red}
                            green={green}
                            blue={blue}
                        />
                    </div>
                </div>
            </Section>

        </Layout>
    )
}

export const Head = () => <Seo title="Fragment Shader Tool" />

export default FragmentTool
