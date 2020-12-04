import React from 'react'
import './styles.css'

function index(props) {
  return (
    <div className='blocktela2'>
      <img src={props.image} className='image' />
      <h1 className='graduation'>{props.graduation}</h1>
      <h2 className='course1'>{props.course1}</h2>
      <h3 className='class'>{props.class}</h3>
    </div>
  )
}

export default index
