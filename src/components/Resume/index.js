import React from 'react'
import './styles.css'
import Blocks from './Blocks/index'
import Activity from '../Activity/index'

function index() {
    return (
        <div>
            <h1 className="tittleResume">Resumo</h1>
        <div className="blocks">
            <Blocks number="02" info="Cursos matriculados" icon="fas fa-graduation-cap" />
            <Blocks number="02" info="Atividades próximas" icon="fas fa-tasks" /> 
            <Blocks number="785" info="Alunos online" icon="fas fa-user-graduate" />  
        </div>
        
        <div className="blocks2">
            <Activity/>
        </div>
        </div>
    )
}

export default index