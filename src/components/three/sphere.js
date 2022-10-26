import * as React from "react"
import * as THREE from "three"
import fragment from '../../shaders/fragment.glsl'
import vertex from '../../shaders/vertex.glsl'
import { lerp } from "../../utils/lerp"

const ThreeSphere = () => {
    let container = React.useRef(null);

    const createScene = () => {
        container = container.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        let mouse = {
            x: 0,
            y: 1
        }

        let width = container.offsetWidth;
        let height = container.offsetHeight;
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        container.appendChild(renderer.domElement);

        // const geometry = new THREE.SphereGeometry(15, 32, 16);
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // const cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);

        window.addEventListener('resize', () => resize());

        const resize = () => {
            width = container.offsetWidth;
            height = container.offsetHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }

        const sphereGeometry = new THREE.SphereGeometry(1, 40, 40);
        // const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const sphereMaterial = new THREE.ShaderMaterial({
            uniforms: {
                hoverState: {
                    value: mouse.x
                },
                time: {
                    value: 1
                },
            //     time: { value: 0 },
            //     oceanTexture: { value: new THREE.TextureLoader().load(ocean) },
            },
            side: THREE.DoubleSide,
            fragmentShader: fragment,
            vertexShader: vertex,
            wireframe: true
        })
        sphereMaterial.needsUpdate = true;
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.geometry.elementsNeedUpdate = true;
        scene.add(sphere);

        window.addEventListener('mousemove', (event) => {
            mouse = {
                x: (event.clientX / width) * 2 - 1,
                y: - (event.clientY / height) * 2 + 1
            }
            // sphere.material.uniforms.hoverState.value = 1.0;

        }, false);

        camera.position.x = -0.7;
        camera.position.y = .05;
        camera.position.z = 1.2;
        // camera.lookAt(sphere.position);
        
        let time = 0;
        function animate() {
            requestAnimationFrame(animate);
            time += 0.005;
            sphere.material.uniforms.hoverState.value = lerp(sphere.material.uniforms.hoverState.value, mouse.x*0.01, 0.05);
            // sphere.material.uniforms.hoverState.value = mouse.x * 0.01;
            sphere.material.uniforms.time.value = mouse.y * 0.01;
            sphere.rotation.x += 0.001;
            sphere.rotation.y += 0.001;

            renderer.render(scene, camera);
        };
        animate();
    }


    React.useEffect(() => {
        createScene();
    }, []);

    return (
        <div ref={container} style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0}}>
        </div>
    )
}

export default ThreeSphere