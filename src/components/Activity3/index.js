import React from 'react'
import './styles.css'
import Block3 from './Block3/index'

function index() {
    return (
        <div>
            <h1 className="tittleActivity3">Próximas atividades</h1>
        <div className="stylesBlock3">
            <Block3 course="Algoritmo e Programação" upload="Enviar arquivo Peter Smokes" date="10/10/20" image="https://i.imgur.com/aadwyfC.jpg"/>
        </div>
        </div>
    )
}

export default index