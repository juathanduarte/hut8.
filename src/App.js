import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './containers/Dashboard'
import Courses from './containers/Courses'
import Course1 from './containers/Course1'
import Course2 from './containers/Course2'
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
            <Route path='/cursos/curso/1' exact component={Course1} />
            <Route path='/cursos/curso/2' exact component={Course2} />
          </Switch>
        </div>
      ) : (
        <p>Carregando</p>
      )}
    </BrowserRouter>
  )
}

export default App
