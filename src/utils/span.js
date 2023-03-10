import React from "react"
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

const spanText = (children) => {

    const spanChar = (note) => {
        return [...note].map((char, key) => {
            console.log(char);
            return <span className='char' key={key}>{char}</span>
        });
    }

    const wrapWords = (str) => {
        const words = str.split(' ');

        return [...words].map((word, key) => {
            return <>
                <span className='word' key={key}>{spanChar(word)}</span>
                <span className="whitespace"> </span>
            </>
        });
    }

    return <>{wrapWords(children)}</>
}

export default spanText
