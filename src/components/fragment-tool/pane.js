import React from "react"
import { Pane } from 'tweakpane';

const ShaderControls = (props) => {
    const { container, setScene, attributes, setAttributes } = props;
    const PARAMS = {
        wireframe: true,
        color: { r: 255, g: 255, b: 255 },
    };
    
    const pane = new Pane({
        title: 'Fragment Controls',
        container: container
    });
    const wireframe = pane.addInput(PARAMS, 'wireframe');
    const fragment = pane.addFolder({
        title: 'Fragment Controls',
        expanded: true,
    });
    const input = fragment.addInput(PARAMS, 'color', {
        view: 'color',
    });

    input.on('change', function (ev) {
        setAttributes({
            ...attributes,
            red: ev.value.r / 255,
            green: ev.value.g / 255,
            blue: ev.value.b / 255
        });
    });

    wireframe.on('change', (ev) => setScene({ wireframe: ev.value }));
}

export default ShaderControls
