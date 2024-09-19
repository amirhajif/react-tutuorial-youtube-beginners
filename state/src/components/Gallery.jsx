import { useState } from 'react';

import { sculptureList } from '../mockData/sculpture'

export default function Gallery() {

    const [index, setIndex] = useState(0)

    // let index = 0;

    function handleClick() {
        setIndex(index + 1)
    }

    function handlePrevClick() {
        setIndex(index - 1)
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <button onClick={handlePrevClick}>
                Prev
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>
                {sculpture.description}
            </p>
        </>
    )
}
