import React from 'react'
import Sidebar from '../../components/Sidebar'
import Resume1 from '../../components/Resume1'
import Activity3 from '../../components/Activity3'
import './styles.css' 

function index () {
  return (
    <div className="dashboard3">
      <div>
        <Sidebar name="Fausto Silva" course="Ciência da Computação"/>
      </div>
      <div>
        <Resume1 tittle="Algoritmos e Programação"/>
      </div>
    </div>
  )
}

export default index