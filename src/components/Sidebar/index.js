import React from'react'
import './styles.css'

function Sidebar(props){
    return(
        <div className="Sidebar">
            <h1>{props.name}</h1>
        </div>
    )
}

export default Sidebar