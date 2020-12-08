import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Listagem from './pages/Listagem'
import Register from './pages/Register'
import RegisterUser from './pages/RegisterUser'
import Update from './pages/Update'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/lista" component={Listagem} />
        <Route path="/register" component={Register} />
        <Route path="/register-user" component={RegisterUser} />
        <Route path="/update" component={Update} />
      </Switch>
    </BrowserRouter>
  )
}
