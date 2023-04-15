import React from "react"
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

const spanText = (children) => {

    const spanChars = (note) => {
        return [...note].map((char, key) => {
            return <span className='char' key={key}>{char}</span>
        });
    }

    const wrapWords = (str) => {
        const words = str.split(' ');

        return [...words].map((word, key) => {
            return <React.Fragment key={key}>
                <span className='word'>{spanChars(word)}</span>
                <span className="whitespace"> </span>
            </React.Fragment>
        });
    }

    return <>{wrapWords(children)}</>
}

export default spanText
