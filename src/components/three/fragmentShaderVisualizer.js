import * as React from "react"
import * as THREE from "three"
import { sceneResize } from "../../utils/three-utils"

const FragmentShaderVisualizer = (props) => {
    const { fragment, threeContainer } = props;

    let container = threeContainer;
    const createScene = () => {
        container = container.current;
        var scene = new THREE.Scene();
        let width = container.offsetWidth + 1;
        let height = container.offsetHeight;
        // Create the camera
        var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 8;
        
        // Resize
        window.addEventListener('resize', () => sceneResize({ width, height, renderer, camera, container }));


        // Create the renderer
        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        // Create the cube geometry
        const cubeSize = 5;
        const cubeSegments = 10;
        var cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize, cubeSegments, cubeSegments, cubeSegments );

        // Create a custom material with a custom fragment shader
        var customMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0.0 }
            },
            // wireframe: true,
            vertexShader: `
                varying vec2 vUv;
                uniform float time;
                uniform vec2 mouse;

                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: fragment
        });

        // Create the cube mesh by combining the geometry and material
        var cube = new THREE.Mesh(cubeGeometry, customMaterial);

        // Position the cube in the scene
        cube.position.set(0, 0, 0);

        // Add the cube to the scene
        scene.add(cube);

        // Animate the cube
        const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        const differentMovement = Math.random() * 0.002 * plusOrMinus;

        function animate() {
            requestAnimationFrame(animate);
            customMaterial.uniforms.time.value += 0.1;
            cube.rotation.x += differentMovement;
            cube.rotation.y += differentMovement;
            cube.rotation.z += differentMovement;
            renderer.render(scene, camera);
        }
        animate();
    }


    React.useEffect(() => {
        createScene();
    }, []);

    return (
        <>
        </>
    )
}

export default FragmentShaderVisualizer