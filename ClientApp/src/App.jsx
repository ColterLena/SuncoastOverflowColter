import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './custom.scss'

import { Questions } from './pages/Questions'
import { Header } from './components/Header'
import { AddQuestion } from './pages/AddQuestion'
import { ShowQuestion } from './pages/ShowQuestion'
import { NavBar } from './components/NavBar'

export function App() {
  return (
    <>
      <NavBar />
      <main className="container-fluid p-4">
        <Header />
        <Switch>
          <Route exact path="/">
            <Questions />
          </Route>
          <Route path="/question/add">
            <AddQuestion />
          </Route>
          <Route path="/question/:id">
            <ShowQuestion />
          </Route>
        </Switch>
      </main>
    </>
  )
}
