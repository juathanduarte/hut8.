import React from 'react'
import './styles.css'
import Block1 from './Block1/index'

function index() {
    return (
        <section className="tela3">
        {/* <div class="avatar--luciano">
            <img class="avatar-fausto" src="https://i.imgur.com/T2XCCkG.jpg" alt="Avatar Luciano Hulk"></img>
        </div> */}
        <div>
            <h1 className="tittleCourse">Algoritmos e Programação</h1>
            <h2 className="subtittleClass">Turma M52</h2>
            {/* <h3 className="nameTeacher">Luciano Hulk</h3>
            <h4 className="responsibleTeacher">Professor responsável</h4> */}
         <div className="blocks">
            <Block1 number="01" info="Atividades próximas" icon="fas fa-tasks" />
            <Block1 number="04" info="Créditos" icon="fas fa-graduation-cap" /> 
            <Block1 number="28" info="Alunos matriculados" icon="fas fa-user-graduate" />  
        </div>
        </div>
        </section>
    )
}

export default index