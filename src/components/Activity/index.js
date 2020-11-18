import React from 'react'
import './styles.css'
import Block from './Block/index'

function index() {
    return (
        <div>
            <h1 className="tittleActivity">Próximas atividades</h1>
        <div className="stylesBlock">
            <Block course="Algoritmo e Programação" upload="Enviar arquivo Peter Smokes" date="10/10/20" image="https://i.imgur.com/aadwyfC.jpg"/>
            <Block course="Projeto de Banco de Dados" upload="Enviar o esquema MySQL" date="10/10/20" image="https://i.imgur.com/RgQrlAS.jpg"/> 
        </div>
        </div>
    )
}

export default index