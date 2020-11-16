import React from'react'
import './styles.css'

function Sidebar(props){
    return(
        <div className="Sidebar">
            <section class="grid center">
            <div class="avatar--fausto">
                <img class="avatar-fausto" src="https://i.imgur.com/aU48TWI.jpg" alt="Avatar Fausto Silva"></img>
            </div>
            <h1>{props.name}</h1>
            <h2>{props.course}</h2>
            <ul class="button-dashboard"><a href="#">Dashboard</a></ul>
            <ul class="button-courses"><a href="#">Meus cursos</a></ul>
            </section>
        </div>
    )
}

export default Sidebar