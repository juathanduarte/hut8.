import React from 'react'
import './styles.css'
import Block1 from './Block1/index'

function index() {
    return (
        <div>
            <h1 className="tittleActivity">Meus cursos</h1>
        <div className="stylesBlock">
            <Block1 graduation="Graduação" course="Algoritmos e Programação" class="M52" image="https://i.imgur.com/dSG2ZLX.jpg"/>
            <Block1 graduation="Graduação" course="Projeto de Banco de Dados" class="M52" image="https://i.imgur.com/GpfCzWB.jpg"/> 
        </div>
        </div>
    )
}

export default index