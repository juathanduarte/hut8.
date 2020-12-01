import React, { useEffect, useState } from 'react'
import './styles.css'
import Block from './Block/index'
import { getInfo } from '../../services/requests'

function Index() {
  const [activitiesData, setactivitiesData] = useState(null)

  useEffect(() => {
    getInfo().then(res => {
      setactivitiesData(res.data[0].nextActivities)
    })
  }, [])

  return (
    <div>
      <h1 className='tittleActivity'>Próximas atividades</h1>
      <div className='stylesBlock'>
        {activitiesData ? (
          <>
            <Block
              course={activitiesData[0].course}
              upload={activitiesData[0].title}
              date={activitiesData[0].deadline}
              image={activitiesData[0].image}
            />
            <Block
              course={activitiesData[1].course}
              upload={activitiesData[1].title}
              date={activitiesData[1].deadline}
              image={activitiesData[1].image}
            />
          </>
        ) : (
          <p>Carregando</p>
        )}
      </div>
    </div>
  )
}

export default Index
