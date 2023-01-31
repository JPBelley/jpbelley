export const sceneResize = ({ renderer, camera, container }) => {
    console.log(container.offsetWidth);

    const width = container.offsetWidth;
    const height = container.offsetHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
} 