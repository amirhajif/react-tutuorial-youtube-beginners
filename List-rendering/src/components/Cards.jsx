import React from 'react'
import Card from './Card'
import { programmers } from '../mockData/data'

export default function Cards() {
    return (
        <div className='container'>
            {
                programmers.map((programmer, index) => (
                    <Card key={index} name={programmer.name} job={programmer.job} />
                ))
            }
        </div>
    )
}
