// varying float vNoise;
// varying vec2 vUv;
// uniform sampler2D uImage;
// uniform float time;

precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);


void main()	{

    // vec2 newUV = vUv;


    // vec4 oceanView = texture2D(uImage,newUV);


   //  gl_FragColor = vec4(finalColor,1.);
    //gl_FragColor = vec4(vUv,0.,1.);
    // gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    // gl_FragColor = oceanView + 0.5*vec4(vNoise);
    // gl_FragColor = vec4(vNoise,0.,0.,1.);
    // gl_FragColor = oceanView;
    // gl_FragColor.rgb += 0.05*vec3(vNoise);

    //////////
    vec3 color = vec3(0.0);

    float pct = abs(sin(u_time));

    // Mix uses pct (a value from 0-1) to
    // mix the two colors
    color = mix(colorA, colorB, pct);

    //gl_FragColor = vec4(color,1.0);
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}