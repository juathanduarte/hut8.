import React from 'react'
import './styles.css'
import Blocks from './Blocks/index'

function index() {
    return (
        <div className="blocks">
            <Blocks number="02" info="Cursos matriculados" icon="fas fa-graduation-cap" />
            <Blocks number="02" info="Atividades próximas" icon="fas fa-tasks" /> 
            <Blocks number="785" info="Alunos online" icon="fas fa-user-graduate" />  
        </div>
    )
}

export default index