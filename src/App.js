import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './containers/Dashboard'
import Courses from './containers/Courses'
import Course from './containers/Course'
import Sidebar from'./components/Sidebar'

function App () {
  return (
    <BrowserRouter>
    <div className='grid'>
    <Sidebar name="Fausto Silva" course="Ciência da Computação"/>
    <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/cursos' exact component={Courses} />
        <Route path='/curso' exact component={Course} />
    </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App