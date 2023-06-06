import React, { useRef, useEffect, useState } from "react"
import * as THREE from "three"
// import { sceneResize } from "../../utils/three-utils"

const ShaderVisualizerTool = (props) => {
    const { fragment, threeContainer, attributes, scene, callback } = props;
    const { red, green, blue } = attributes;
    const requestRef = useRef();
    const [elements, setElements] = useState({
        scene: new THREE.Scene(),
        camera: new THREE.PerspectiveCamera(75, threeContainer.offsetWidth + 1 / threeContainer.offsetHeight, 0.1, 1000),
        renderer: '',
        customMaterial: ''
    });

    const sceneResize = () => {
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        elements.renderer.setSize(width, height);
        elements.camera.aspect = width / height;
        elements.camera.updateProjectionMatrix();
    } 

    let container = threeContainer;
    const createScene = () => {
        container = container.current;

        let width = container.offsetWidth + 1;
        let height = container.offsetHeight;
        // Create the camera
        elements.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        elements.camera.position.z = 8;

        // Resize
        window.addEventListener('resize', () => sceneResize());


        // Create the renderer
        elements.renderer = new THREE.WebGLRenderer({ alpha: true });
        elements.renderer.setSize(width, height);
        container.appendChild(elements.renderer.domElement);

        // Create the cube geometry
        const cubeSize = 5;
        const cubeSegments = 10;
        var cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize, cubeSegments, cubeSegments, cubeSegments );

        // Create a custom material with a custom fragment shader
        elements.customMaterial = new THREE.ShaderMaterial({
            uniforms: {
                red: { value: 1.0 },
                green: { value: 1.0 },
                blue: { value: 1.0 },
                time: { value: 0.0 },
            },
            wireframe: true,
            vertexShader: `
                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: fragment
        });
        elements.customMaterial.needsUpdate = true;

        // Create the cube mesh by combining the geometry and material
        elements.cube = new THREE.Mesh(cubeGeometry, elements.customMaterial);

        // Position the cube in the scene
        elements.cube.position.set(0, 0, 0);

        // Add the cube to the scene
        elements.scene.add(elements.cube);
    }

    const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    const differentMovement = Math.random() * 0.002 * plusOrMinus;
    const animate = () => {
        // callback();
        elements.customMaterial.uniforms.red.value = red;
        elements.customMaterial.uniforms.green.value = green;
        elements.customMaterial.uniforms.blue.value = blue;
        elements.customMaterial.uniforms.time.value += 0.1;
        elements.customMaterial.wireframe = scene.wireframe;
        elements.cube.rotation.x += differentMovement;
        elements.cube.rotation.y += differentMovement;
        elements.cube.rotation.z += differentMovement;
        elements.renderer.render(elements.scene, elements.camera);
        requestRef.current = requestAnimationFrame(() => animate(red));
    }

    useEffect(() => {
        createScene(threeContainer.current);
        animate();
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    useEffect(() => {
        cancelAnimationFrame(requestRef.current);
        animate();
    }, [attributes, scene]);

    return <></>
}

export default ShaderVisualizerTool