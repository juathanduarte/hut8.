import React from 'react'
import './styles.css'

function Index(props) {
  return (
    <div className='block6'>
      <img src={props.image} className='image6' />
      <h1 className='course6'>{props.course}</h1>
      <h2 className='upload6'>{props.upload}</h2>
      <h3 className='date6'>{props.date}</h3>
    </div>
  )
}

export default Index
