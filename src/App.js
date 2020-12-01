import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './containers/Dashboard'
import Courses from './containers/Courses'
import Course from './containers/Course'
import Sidebar from './components/Sidebar'
import { getInfo } from './services/requests'

function App() {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    getInfo().then(res => {
      setInfo(res.data)
    })
  }, [])

  return (
    <BrowserRouter>
      {info ? (
        <div className='grid'>
          <Sidebar name={info[0].name} course={info[0].course} />
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/cursos' exact component={Courses} />
            <Route path='/cursos/curso/1' exact component={Course} />
          </Switch>
        </div>
      ) : (
        <p>Carregando</p>
      )}
    </BrowserRouter>
  )
}

export default App
