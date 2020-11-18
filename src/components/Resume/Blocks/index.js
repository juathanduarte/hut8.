import React from 'react'
import './styles.css'

function index(props) {
    return (
        <div className="block">
            <div className ="found">
                <i class={props.icon}></i>
            </div>
            <h1>{props.number}</h1>
            <h2>{props.info}</h2>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
        </div>
    )
}

export default index