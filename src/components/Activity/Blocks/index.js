import React from 'react'
import './styles.css'

function index(props) {
    return (
        <div>
            <h1>{props.course}</h1>
            <h2>{props.upload}</h2>
            <h2>{props.date}</h2>
        </div>
    )
}

export default index
