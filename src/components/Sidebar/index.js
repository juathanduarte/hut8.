import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

function Sidebar(props) {
  return (
    <div className='tela1'>
      <div className='Sidebar'>
        <div class='avatar--fausto'>
          <img
            class='avatar-fausto'
            src='https://i.imgur.com/aU48TWI.jpg'
            alt='Avatar Fausto Silva'
          ></img>
        </div>
        <div className='infoStudent'>
          <h1 className='propsName'>{props.name}</h1>
          <p className='propsCourse'>{props.course}</p>
        </div>
        <NavLink exact className='button-dashboard' activeClassName='active' to='/'>
          Dashboard
        </NavLink>
        <NavLink className='button-courses' activeClassName='active' to='/cursos'>
          Meus cursos
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
