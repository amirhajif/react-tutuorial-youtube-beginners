import React from 'react'

export default function Card({ name, job }) {
    return (
        <div className="card">
            <div className="card-border-top">
            </div>
            <div className="img">
            </div>
            <span>{name}</span>
            <p className="job">{job}</p>
            <button> Click
            </button>
        </div>
    )
}
