import React, { useEffect, useState } from 'react'
import './styles.css'
import Block1 from './Block1/index'
import Block3 from './Block3/index'
import { getInfo } from '../../services/requests'

function Index() {
  const [course1Data, setcourse1Data] = useState(null)

  useEffect(() => {
    getInfo().then(res => {
      setcourse1Data(res.data[0].courses)
    })
  }, [])

  return (
    <div className='tela3'>
      {course1Data ? (
        <>
          <div className='flex-box1'>
            <div className='courseInfo'>
              <h1 className='tittleCourse'>Algoritmos e Programação</h1>
              <h2 className='subtittleClass'>Turma M52</h2>
            </div>
            <div className='teacherInfo'>
              <img src={course1Data[0].teacher.avatar}></img>
              <div className='teacherInfo2'>
                <h1 className='teacherName'>{course1Data[0].teacher.name}</h1>
                <h2 className='teacherSubtittle'>Professor responsável</h2>
              </div>
            </div>
          </div>

          <div className='blocks'>
            <Block1
              number={course1Data[0].overview.nextActivities}
              info='Atividades próximas'
              icon='fas fa-tasks'
            />
            <Block1
              number={course1Data[0].overview.credits}
              info='Créditos'
              icon='fas fa-graduation-cap'
            />
            <Block1
              number={course1Data[0].overview.enrolledStudents}
              info='Alunos matriculados'
              icon='fas fa-user-graduate'
            />
          </div>

          <h1 className='tittleActivity3'>Próximas atividades</h1>
          <div className='stylesBlock3'>
            <Block3
              course={course1Data[0].nextActivities[0].course}
              upload={course1Data[0].nextActivities[0].title}
              date={course1Data[0].nextActivities[0].deadline}
              image={course1Data[0].nextActivities[0].image}
            />
          </div>
        </>
      ) : (
        <p>Carregando</p>
      )}
    </div>
  )
}

export default Index
