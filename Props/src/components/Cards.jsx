import React from 'react'
import Card from './Card'

export default function Cards() {
    return (
        <div className='container'>
            <Card name="amir" job="front-end" />
            <Card name="reza" job="back-end" />
            <Card name="mohammad" job="ui/ux" />
        </div>
    )
}
