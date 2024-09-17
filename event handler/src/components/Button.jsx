import React from 'react'

export default function Button({ text, handleClick }) {
    // const handleClick = () => {
    //     alert("click")
    // }
    return (
        <button onClick={handleClick}>{text}</button>
    )
}
