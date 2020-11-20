import React from 'react'
import Sidebar from '../../components/Sidebar'
import Activity2 from '../../components/Activity2'
import './styles.css'

function index() {
    return (
        <div className="dashboard2">
            <div>
                <Sidebar name="Fausto Silva" course="Ciência da Computação"/>
            </div>
            <div>
                <Activity2 title="Atividades"/>
            </div>
        </div>
    )
}

export default index
