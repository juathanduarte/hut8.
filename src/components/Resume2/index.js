import React, { useEffect, useState } from 'react'
import Block4 from './Block4/index'
import Block5 from './Block5/index'
import { getInfo } from '../../services/requests'
import './styles.css'

function Index() {
  const [course2Data, setcourse2Data] = useState(null)

  useEffect(() => {
    getInfo().then(res => {
      setcourse2Data(res.data[0].courses)
    })
  }, [])

  return (
    <div className='tela3'>
      {course2Data ? (
        <>
          <div className='flex-box1'>
            <div className='courseInfo'>
              <h1 className='tittleCourse'>{course2Data[1].course}</h1>
              <h2 className='subtittleClass'>Turma M72</h2>
            </div>
            <div className='teacherInfo'>
              <img src={course2Data[1].teacher.avatar}></img>
              <div className='teacherInfo2'>
                <h1 className='teacherName'>{course2Data[1].teacher.name}</h1>
                <h2 className='teacherSubtittle1'>Professora responsável</h2>
              </div>
            </div>
          </div>

          <div className='blocks'>
            <Block4
              number={course2Data[1].overview.nextActivities}
              info='Atividades próximas'
              icon='fas fa-tasks'
            />
            <Block4
              number={course2Data[1].overview.credits}
              info='Créditos'
              icon='fas fa-graduation-cap'
            />
            <Block4
              number={course2Data[1].overview.enrolledStudents}
              info='Alunos matriculados'
              icon='fas fa-user-graduate'
            />
          </div>

          <h1 className='tittleActivity3'>Próximas atividades</h1>
          <div className='stylesBlock3'>
            <Block5
              course={course2Data[1].nextActivities[0].course}
              upload={course2Data[1].nextActivities[0].title}
              date={course2Data[1].nextActivities[0].deadline}
              image={course2Data[1].nextActivities[0].image}
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
