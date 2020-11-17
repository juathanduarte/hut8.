import React from 'react'
import Sidebar from '../../components/Sidebar'
import Resume from '../../components/Resume'
import './styles.css' 

function Dashboard () {
  return (
    <div className="dashboard">
      <div>
        <Sidebar name="Fausto Silva" course="Ciência da Computação"/>
      </div>
      <div>
      <Resume title="Resumo"/>
      </div>
    </div>
  )
}

export default Dashboard