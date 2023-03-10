import React, { useRef, useEffect } from "react"
import { useLenis } from '@studio-freight/react-lenis'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import spanText from './span';
gsap.registerPlugin(ScrollTrigger);

const AnimateText = ({ children, animationType }) => {
    const textToAnimate = useRef(null);

    useLenis((lenis) => {
        // console.log('Current page progress', lenis)
    })

    const animationHeading = (chars) => {
        chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 }));

        gsap.fromTo(chars, {
            'will-change': 'opacity, transform',
            transformOrigin: '50% 0%',
            opacity: 0,
            rotationX: -90,
            z: -200
        },
        {
            ease: 'power1',
            opacity: 1,
            stagger: 0.05,
            rotationX: 0,
            z: 0,
            scrollTrigger: {
                trigger: textToAnimate.current,
                start: 'center bottom',
                end: 'bottom top+=25%',
                scrub: true,
        }
        });
    }

    const animationParagraph = () => {

        gsap.fromTo(textToAnimate.current, {
            transformOrigin: '0% 50%',
            rotate: 3
        },{
            ease: 'none',
            rotate: 0,
            scrollTrigger: {
                trigger: textToAnimate.current,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
            }
        });

        gsap.fromTo(textToAnimate.current.querySelectorAll('.word'), {
            'will-change': 'opacity',
            opacity: 0.1
        },{
            ease: 'none',
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: textToAnimate.current,
                start: 'top bottom-=10%',
                end: 'center top+=50%',
                scrub: true,
            }
        });
    }

    useEffect(() => {
        const chars = textToAnimate.current.querySelectorAll('.char');

        if (animationType === 'heading') animationHeading(chars);
        else animationParagraph(chars);
    }, [])

    return <span className="splitting" ref={textToAnimate}>{spanText(children)}</span>
}

export default AnimateText
