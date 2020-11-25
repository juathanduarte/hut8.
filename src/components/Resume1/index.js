import React from 'react'
import './styles.css'
import Block1 from './Block1/index'
import Block3 from './Block3/index'

function index() {
    return (
        <section className="tela3">
        <div className="flex-box1">
        <div className="courseInfo">
            <h1 className="tittleCourse">Algoritmos e Programação</h1>
            <h2 className="subtittleClass">Turma M52</h2>
        </div>
        <div className="teacherInfo">
            <img src="https://i.imgur.com/T2XCCkG.jpg" alt="Avatar Luciano Hulk"></img>
            <div className="teacherInfo2">
                <h1 className="teacherName">Luciano Hulk</h1>
                <h2 className="teacherSubtittle">Professor responsável</h2>
            </div>
        </div>
        </div>

         <div className="blocks">
            <Block1 number="01" info="Atividades próximas" icon="fas fa-tasks" />
            <Block1 number="04" info="Créditos" icon="fas fa-graduation-cap" /> 
            <Block1 number="28" info="Alunos matriculados" icon="fas fa-user-graduate" />  
        </div>
        <div>
            <h1 className="tittleActivity3">Próximas atividades</h1>
        <div className="stylesBlock3">
            <Block3 course="Algoritmo e Programação" upload="Enviar arquivo Peter Smokes" date="10/10/20" image="https://i.imgur.com/aadwyfC.jpg"/>
        </div>
        </div>
        </section>
    )
}

export default index