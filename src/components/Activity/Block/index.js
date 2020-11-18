import React from 'react'
import './styles.css'

function index(props) {
    return (
        <div className="block2">
            <img src={props.image} className="image"/>
            <h1 className="course">{props.course}</h1>
            <h2 className="upload">{props.upload}</h2>
            <h3 className="date">{props.date}</h3>
        </div>
    )
}

export default index
