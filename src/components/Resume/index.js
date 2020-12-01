import React, { useEffect, useState } from 'react'
import './styles.css'
import Blocks from './Blocks/index'
import Activity from '../Activity/index'
import { getInfo } from '../../services/requests'

function Index() {
  const [dashboardData, setdashboardData] = useState(null)

  useEffect(() => {
    getInfo().then(res => {
      setdashboardData(res.data[0].overview)
    })
  }, [])

  return (
    <div>
      <h1 className='tittleResume'>Resumo</h1>
      <div className='blocks'>
        {dashboardData ? (
          <>
            <Blocks
              number={dashboardData.enrolledCourses}
              info='Cursos matriculados'
              icon='fas fa-graduation-cap'
            />
            <Blocks
              number={dashboardData.nextActivities}
              info='Atividades próximas'
              icon='fas fa-tasks'
            />
            <Blocks
              number={dashboardData.onlineStudents}
              info='Alunos online'
              icon='fas fa-user-graduate'
            />
          </>
        ) : (
          <p>Carregando</p>
        )}
      </div>

      <div className='blocks2'>
        <Activity />
      </div>
    </div>
  )
}

export default Index
