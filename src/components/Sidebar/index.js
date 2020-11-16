import React from'react'
import './styles.css'

function Sidebar(props){
    return(
        <div className="Sidebar">
            <section class="grid center">
            <img class="avatar-fausto" src="https://i.imgur.com/aU48TWI.jpg" alt="Avatar Fausto Silva"></img>
            <h1>{props.name}</h1>
            </section>
        </div>
    )
}

export default Sidebar