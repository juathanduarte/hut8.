import React, { useEffect, useState } from 'react'
import './styles.css'
import Block1 from './Block1/index'
import { getInfo } from '../../services/requests'
import { NavLink } from 'react-router-dom'

function Index() {
  const [coursesData, setcoursesData] = useState(null)

  useEffect(() => {
    getInfo().then(res => {
      setcoursesData(res.data[0].courses)
    })
  }, [])

  return (
    <div>
      <h1 className='tittleActivity1'>Meus cursos</h1>
      <div className='stylesBlock1'>
        {coursesData ? (
          <>
            <NavLink exact className='button-algoritmo' to='/cursos/curso/1'>
              <Block1
                graduation={coursesData[0].type}
                course1={coursesData[0].course}
                class={coursesData[0].class}
                image={coursesData[0].image}
              />
            </NavLink>
            <NavLink exact className='button-banco' to='/cursos/curso/2'>
              <Block1
                graduation={coursesData[1].type}
                course1={coursesData[1].course}
                class={coursesData[1].class}
                image={coursesData[1].image}
              />
            </NavLink>
          </>
        ) : (
          <p>Carregando</p>
        )}
      </div>
    </div>
  )
}

export default Index
